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
router.get("/all-product/:id", async (req, res) => {
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

    await Product.findByIdAndDelete(req.params.id);

    const productImages = [
      ...(foundProduct.images || []),
      foundProduct.image,
    ].filter(Boolean);

    const uniqueImages = [...new Set(productImages)];

    try {
      for (const imageUrl of uniqueImages) {
        await deleteCloudinaryImage(imageUrl);
      }
    } catch (error) {
      console.error("Cloudinary Image Delete Error:", error);

      return res.status(200).json({
        message: "Product deleted, but some images could not be deleted from Cloudinary.",
      });
    }

    return res.status(200).json({
      message: "Product deleted successfully",
    });

  } catch (error) {
    console.error("Delete Product Error:", error);

    return res.status(500).json({
      message: "Internal server error while deleting product",
      error: error.message,
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

    try {
      if (!isValidId(req.params.id)) {
        return res.status(400).json({
          message: "Invalid product ID",
        });
      }

     // Get existing product images
const oldImages = existingProduct.images?.length
  ? existingProduct.images
  : existingProduct.image
    ? [existingProduct.image]
    : [];

// Keep existing images if frontend does not send existingImages
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
const totalImages = existingImages.length + (req.files?.length || 0);

if (totalImages > 5) {
  return res.status(400).json({
    message: "A product can have a maximum of 5 images",
  });
}

// Validate existingImages
if (
  !Array.isArray(existingImages) ||
  !existingImages.every(
    (image) => typeof image === "string" && oldImages.includes(image)
  )
) {
  return res.status(400).json({
    message: "Invalid product images",
  });
}

      // Validate only fields supplied in this update
      const allowedFields = [
        "productname",
        "productcategory",
        "productprice",
        "productquantity",
        "productdescription",
      ];

      for (const field of allowedFields) {
        if (req.body[field] !== undefined) {
          if (typeof req.body[field] !== "string" || !req.body[field].trim()) {
            return res.status(400).json({
              message: `${field} must be a non-empty value`,
            });
          }
        }
      }

      if (req.body.productprice !== undefined) {
        const price = Number(req.body.productprice);

        if (!Number.isFinite(price) || price < 0) {
          return res.status(400).json({
            message: "Invalid product price",
          });
        }

        req.body.productprice = price;
      }

      if (req.body.productquantity !== undefined) {
        const quantity = Number(req.body.productquantity);

        if (!Number.isInteger(quantity) || quantity < 0) {
          return res.status(400).json({
            message: "Invalid product quantity",
          });
        }

        req.body.productquantity = quantity;
      }

      const updateData = {};

      for (const field of allowedFields) {
        if (req.body[field] !== undefined) {
          updateData[field] =
            typeof req.body[field] === "string"
              ? req.body[field].trim()
              : req.body[field];
        }
      }

      // Upload a replacement image only if a new file is provided
      // Upload new images if provided
if (req.files && req.files.length > 0) {
  for (const file of req.files) {
    const imageResult = await uploadToCloudinary(file);

    uploadedImageUrls.push(imageResult.secure_url);
  }
}

      let updatedProduct;

      try {
        updatedProduct = await Product.findByIdAndUpdate(
          req.params.id,
          { $set: updateData },
          {
            new: true,
            runValidators: true,
          },
        );
      } catch (error) {
        if (newImageUrl) {
          try {
            await deleteCloudinaryImage(newImageUrl);
          } catch {
            // Do not expose internal cleanup errors
          }
        }

        if (error instanceof mongoose.Error.ValidationError) {
          return res.status(400).json({
            message: "Product validation failed",
          });
        }

        throw error;
      }

      // Remove the old image only after the database update succeeds
      if (newImageUrl && existingProduct.image) {
        try {
          await deleteCloudinaryImage(existingProduct.image);
        } catch {
          return res.status(200).json({
            message:
              "Product updated, but old image cleanup failed. Check Cloudinary.",
            data: updatedProduct,
          });
        }
      }

      return res.status(200).json({
        message: "Product updated successfully",
        data: updatedProduct,
      });
    } catch {
      if (newImageUrl) {
        try {
          await deleteCloudinaryImage(newImageUrl);
        } catch {
          // Do not expose internal cleanup errors
        }
      }

      return res.status(500).json({
        message: "Unable to update product",
      });
    }
  },
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
