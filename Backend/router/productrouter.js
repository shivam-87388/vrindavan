const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const { Readable } = require("stream");
const Product = require("../model/Productmodel");
const cloudinary = require("../config/cloudinary");

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
  fileSize: 5 * 1024 * 1024,
  files: 5,
},
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (allowedTypes.includes(file.mimetype)) {
      return cb(null, true);
    }

    const error = new Error("Only JPG, PNG, and WEBP images are allowed");

    error.code = "INVALID_FILE_TYPE";
    return cb(error);
  },
});

const uploadToCloudinary = (file) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "vrindavan-home-products",
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          return reject(error);
        }

        if (!result || !result.secure_url || !result.public_id) {
          return reject(new Error("Cloudinary upload failed"));
        }

        resolve(result);
      },
    );

    Readable.from(file.buffer).pipe(stream);
  });
};

const getCloudinaryPublicId = (imageUrl) => {
  if (!imageUrl) return null;

  try {
    const url = new URL(imageUrl);

    if (url.hostname !== "res.cloudinary.com") {
      return null;
    }

    const parts = url.pathname.split("/");
    const uploadIndex = parts.indexOf("upload");

    if (uploadIndex === -1) return null;

    const publicIdParts = parts.slice(uploadIndex + 1);

    // Remove Cloudinary version, for example v123456789
    if (/^v\d+$/.test(publicIdParts[0])) {
      publicIdParts.shift();
    }

    const lastIndex = publicIdParts.length - 1;

    if (lastIndex < 0) return null;

    // Remove image extension
    publicIdParts[lastIndex] = publicIdParts[lastIndex].replace(
      /\.[^/.]+$/,
      "",
    );

    return publicIdParts.join("/");
  } catch {
    return null;
  }
};

const deleteCloudinaryImage = async (imageUrl) => {
  const publicId = getCloudinaryPublicId(imageUrl);

  if (!publicId) return;

  const result = await cloudinary.uploader.destroy(publicId);

  if (result.result !== "ok" && result.result !== "not found") {
    throw new Error("Cloudinary image deletion failed");
  }
};

const validateProductFields = (body) => {
  const {
    productname,
    productcategory,
    productprice,
    productquantity,
    productdescription,
  } = body;

  if (
    typeof productname !== "string" ||
    !productname.trim() ||
    typeof productcategory !== "string" ||
    !productcategory.trim() ||
    productprice === undefined ||
    productprice === "" ||
    productquantity === undefined ||
    productquantity === "" ||
    typeof productdescription !== "string" ||
    !productdescription.trim()
  ) {
    return "All product fields are required";
  }

  const price = Number(productprice);
  const quantity = Number(productquantity);

  if (!Number.isFinite(price) || price < 0) {
    return "Price must be a valid non-negative number";
  }

  if (!Number.isInteger(quantity) || quantity < 0) {
    return "Quantity must be a non-negative integer";
  }

  const discount = Number(body.productdiscount ?? 0);

  if (!Number.isFinite(discount) || discount < 0 || discount > 100) {
    return "Discount must be between 0 and 100";
  }

const rating = Number(body.productrating ?? 0);

if (!Number.isFinite(rating) || rating < 0 || rating > 5) {
  return "Rating must be between 0 and 5";
}

  return null;
};



const isValidId = (id) => {
  return mongoose.isObjectIdOrHexString(id);
};

//get
router.get("/all-product", async (req, res) => {
  try {
    const allProducts = await Product.find();

    return res.status(200).json({
      message: "Products fetched successfully",
      data: allProducts,
    });
  } catch {
    return res.status(500).json({
      message: "Unable to fetch products",
    });
  }
});

//get buy id
router.get("/:id", async (req, res) => {
  try {
    if (!isValidId(req.params.id)) {
      return res.status(400).json({
        message: "Invalid product ID",
      });
    }

    const foundProduct = await Product.findById(req.params.id);

    if (!foundProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      message: "Product fetched successfully",
      data: foundProduct,
    });
  } catch {
    return res.status(500).json({
      message: "Unable to fetch product",
    });
  }
});

// add product


router.post(
  "/add-product",
  (req, res, next) => {
    upload.array("images", 5)(req, res, (error) => {
      if (error) {
        return handleUploadError(error, res);
      }

      next();
    });
  },
  async (req, res) => {
    const uploadedImageUrls = [];

    try {
      const validationError = validateProductFields(req.body);

      if (validationError) {
        return res.status(400).json({
          message: validationError,
        });
      }

      if (!req.files || req.files.length === 0) {
        return res.status(400).json({
          message: "At least one product image is required",
        });
      }

      // Upload images one by one
      for (const file of req.files) {
        const imageResult = await uploadToCloudinary(file);

        uploadedImageUrls.push(imageResult.secure_url);
      }

      const productprice = Number(req.body.productprice);
      const productdiscount = Number(req.body.productdiscount ?? 0);

      const discountAmount = (productprice * productdiscount) / 100;
      const finalPrice = productprice - discountAmount;

      const newProduct = await Product.create({
        productname: req.body.productname.trim(),
        productcategory: req.body.productcategory.trim(),
        productprice,
        finalPrice,
        productquantity: Number(req.body.productquantity),
        productrating: Number(req.body.productrating ?? 0),
        productdiscount,
        productdescription: req.body.productdescription.trim(),
        images: uploadedImageUrls,
      });

      return res.status(201).json({
        message: "Product added successfully",
        data: newProduct,
      });

    } catch (error) {
      console.error("Add Product Error:", error);

      // Delete uploaded images if an error occurs
      try {
        for (const imageUrl of uploadedImageUrls) {
          await deleteCloudinaryImage(imageUrl);
        }
      } catch (deleteError) {
        console.error("Cloudinary Cleanup Error:", deleteError);
      }

      if (error instanceof mongoose.Error.ValidationError) {
        return res.status(400).json({
          message: "Product validation failed",
          error: error.message,
        });
      }

      return res.status(500).json({
        message: "Internal server error while adding product",
        error: error.message,
      });
    }
  }
);



//delete
router.delete("/delete-product/:id", async (req, res) => {
  try {
    // 1. Validate product ID
    if (!isValidId(req.params.id)) {
      return res.status(400).json({
        message: "Invalid product ID",
      });
    }

    // 2. Find product
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // 3. Collect all product images
    const productImages = [
      ...(product.images || []),
      ...(product.image ? [product.image] : []),
    ];

    // 4. Remove duplicate image URLs
    const uniqueImages = [...new Set(productImages)];

    // 5. Delete product from MongoDB
    await Product.findByIdAndDelete(req.params.id);

    // 6. Attempt to delete every image from Cloudinary
    const failedDeletions = [];

    for (const imageUrl of uniqueImages) {
      try {
        await deleteCloudinaryImage(imageUrl);
      } catch (deleteError) {
        console.error(
          "Cloudinary Image Delete Error:",
          imageUrl,
          deleteError
        );

        failedDeletions.push(imageUrl);
      }
    }

    // 7. Send response
    if (failedDeletions.length > 0) {
      return res.status(200).json({
        message:
          "Product deleted successfully, but some images could not be deleted from Cloudinary.",
        deletedProductId: req.params.id,
        failedImageDeletions: failedDeletions.length,
      });
    }

    return res.status(200).json({
      message: "Product and all associated images deleted successfully",
      deletedProductId: req.params.id,
    });

  } catch (error) {
    console.error("Delete Product Error:", error);

    return res.status(500).json({
      message: "Unable to delete product",
    });
  }
});


//update
router.put(
  "/update-product/:id",
  (req, res, next) => {
    upload.array("images", 5)(req, res, (error) => {
      if (error) {
        return handleUploadError(error, res);
      }

      next();
    });
  },
  async (req, res) => {
    const uploadedImageUrls = [];
    let productUpdated = false;

    try {
      // 1. Validate product ID
      if (!isValidId(req.params.id)) {
        return res.status(400).json({
          message: "Invalid product ID",
        });
      }

      // 2. Find existing product
      const existingProduct = await Product.findById(req.params.id);

      if (!existingProduct) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      // 3. Get old product images
      const oldImages = existingProduct.images?.length
        ? existingProduct.images
        : existingProduct.image
          ? [existingProduct.image]
          : [];

      // 4. Get images that should be retained
      let existingImages = oldImages;

      if (req.body.existingImages !== undefined) {
        try {
          existingImages = JSON.parse(req.body.existingImages);
        } catch {
          return res.status(400).json({
            message: "Invalid existing images data",
          });
        }
      }

      // 5. Validate existing images
      if (
        !Array.isArray(existingImages) ||
        !existingImages.every(
          (image) =>
            typeof image === "string" &&
            oldImages.includes(image)
        ) ||
        new Set(existingImages).size !== existingImages.length
      ) {
        return res.status(400).json({
          message: "Invalid product images",
        });
      }

      // 6. Check total image limit
      const totalImages =
        existingImages.length + (req.files?.length || 0);

      if (totalImages > 5) {
        return res.status(400).json({
          message: "A product can have a maximum of 5 images",
        });
      }

      // At least one image is required
      if (totalImages === 0) {
        return res.status(400).json({
          message: "At least one product image is required",
        });
      }

      // 7. Validate text fields
      const textFields = [
        "productname",
        "productcategory",
        "productdescription",
      ];

      const updateData = {};

      for (const field of textFields) {
        if (req.body[field] !== undefined) {
          if (
            typeof req.body[field] !== "string" ||
            !req.body[field].trim()
          ) {
            return res.status(400).json({
              message: `${field} must be a non-empty value`,
            });
          }

          updateData[field] = req.body[field].trim();
        }
      }

      // 8. Validate numeric fields
      if (req.body.productprice !== undefined) {
        const price = Number(req.body.productprice);

        if (!Number.isFinite(price) || price < 0) {
          return res.status(400).json({
            message: "Invalid product price",
          });
        }

        updateData.productprice = price;
      }

      if (req.body.productquantity !== undefined) {
        const quantity = Number(req.body.productquantity);

        if (!Number.isInteger(quantity) || quantity < 0) {
          return res.status(400).json({
            message: "Invalid product quantity",
          });
        }

        updateData.productquantity = quantity;
      }

      if (req.body.productdiscount !== undefined) {
        const discount = Number(req.body.productdiscount);

        if (
          !Number.isFinite(discount) ||
          discount < 0 ||
          discount > 100
        ) {
          return res.status(400).json({
            message: "Discount must be between 0 and 100",
          });
        }

        updateData.productdiscount = discount;
      }

      if (req.body.productrating !== undefined) {
        const rating = Number(req.body.productrating);

        if (
          !Number.isFinite(rating) ||
          rating < 0 ||
          rating > 5
        ) {
          return res.status(400).json({
            message: "Rating must be between 0 and 5",
          });
        }

        updateData.productrating = rating;
      }

      // 9. Recalculate final price
      const productprice =
        updateData.productprice ?? existingProduct.productprice;

      const productdiscount =
        updateData.productdiscount ??
        existingProduct.productdiscount ??
        0;

      updateData.finalPrice =
        productprice - (productprice * productdiscount) / 100;

      // 10. Upload new images to Cloudinary
      if (req.files?.length > 0) {
        for (const file of req.files) {
          const imageResult = await uploadToCloudinary(file);
          uploadedImageUrls.push(imageResult.secure_url);
        }
      }

      // 11. Combine retained and newly uploaded images
      updateData.images = [
        ...existingImages,
        ...uploadedImageUrls,
      ];

      // 12. Update product in MongoDB
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: updateData,
          $unset: { image: 1 },
        },
        {
          new: true,
          runValidators: true,
        }
      );

      if (!updatedProduct) {
        throw new Error("Product not found during update");
      }

      productUpdated = true;

      // 13. Find images removed by the user
      const removedImages = oldImages.filter(
        (imageUrl) => !existingImages.includes(imageUrl)
      );

      // 14. Attempt to delete every removed image
      const failedDeletions = [];

      for (const imageUrl of removedImages) {
        try {
          await deleteCloudinaryImage(imageUrl);
        } catch (deleteError) {
          console.error(
            "Old Cloudinary Image Delete Error:",
            imageUrl,
            deleteError
          );

          failedDeletions.push(imageUrl);
        }
      }

      // 15. Send response
      if (failedDeletions.length > 0) {
        return res.status(200).json({
          message:
            "Product updated successfully, but some removed images could not be deleted from Cloudinary.",
          data: updatedProduct,
          failedImageDeletions: failedDeletions.length,
        });
      }

      return res.status(200).json({
        message: "Product updated successfully",
        data: updatedProduct,
      });

    } catch (error) {
      console.error("Update Product Error:", error);

      // Delete newly uploaded images only if database update failed
      if (!productUpdated) {
        for (const imageUrl of uploadedImageUrls) {
          try {
            await deleteCloudinaryImage(imageUrl);
          } catch (deleteError) {
            console.error(
              "Cloudinary Cleanup Error:",
              imageUrl,
              deleteError
            );
          }
        }
      }

      if (error instanceof mongoose.Error.ValidationError) {
        return res.status(400).json({
          message: "Product validation failed",
          error: error.message,
        });
      }

      return res.status(500).json({
        message: "Unable to update product",
      });
    }
  }
);





// ==================== UPLOAD ERROR HANDLER ====================

function handleUploadError(error, res) {
  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.status(413).json({
        message: "Image size must not exceed 5 MB",
      });
    }

    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).json({
        message: 'Use only one image with field name "image"',
      });
    }

    return res.status(400).json({
      message: "File upload failed",
    });
  }

  if (error.code === "INVALID_FILE_TYPE") {
    return res.status(415).json({
      message: "Only JPG, PNG, and WEBP images are allowed",
    });
  }

  return res.status(400).json({
    message: "Unable to process uploaded file",
  });
}

module.exports = router;
