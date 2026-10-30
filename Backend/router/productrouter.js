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
    fileSize: 5 * 1024 * 1024, // Maximum 5 MB
    files: 1,
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
    upload.single("image")(req, res, (error) => {
      if (error) {
        return handleUploadError(error, res);
      }

      next();
    });
  },
  async (req, res) => {
    let uploadedImageUrl = "";

    try {
      const validationError = validateProductFields(req.body);

      if (validationError) {
        return res.status(400).json({
          message: validationError,
        });
      }

      // Product image is required
      if (!req.file) {
        return res.status(400).json({
          message: "Product image is required",
        });
      }

      const imageResult = await uploadToCloudinary(req.file);
      uploadedImageUrl = imageResult.secure_url;

      const newProduct = await Product.create({
        productname: req.body.productname.trim(),
        productcategory: req.body.productcategory.trim(),
        productprice: Number(req.body.productprice),
        productquantity: Number(req.body.productquantity),
        productrating: Number(req.body.productrating ?? 0),
        productdiscount: Number(req.body.productdiscount ?? 0),
        productdescription: req.body.productdescription.trim(),
        image: uploadedImageUrl,
      });

      return res.status(201).json({
        message: "Product added successfully",
        data: newProduct,
      });
    } catch (error) {
      // Avoid leaving an uploaded image behind if saving fails
       console.error("Add Product Error:", error);
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
  },
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

    // Delete the database record first
    await Product.findByIdAndDelete(req.params.id);

    // Image cleanup is best-effort: product is already deleted
    if (foundProduct.image) {
      try {
        await deleteCloudinaryImage(foundProduct.image);
      } catch {
        return res.status(200).json({
          message:
            "Product deleted, but image cleanup failed. Check Cloudinary.",
        });
      }
    }

    return res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch {
    return res.status(500).json({
      message: "Unable to delete product",
    });
  }
});

//update
router.put(
  "/update-product/:id",
  (req, res, next) => {
    upload.single("image")(req, res, (error) => {
      if (error) {
        return handleUploadError(error, res);
      }

      next();
    });
  },
  async (req, res) => {
    let newImageUrl = "";

    try {
      if (!isValidId(req.params.id)) {
        return res.status(400).json({
          message: "Invalid product ID",
        });
      }

      const existingProduct = await Product.findById(req.params.id);

      if (!existingProduct) {
        return res.status(404).json({
          message: "Product not found",
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
      if (req.file) {
        const imageResult = await uploadToCloudinary(req.file);
        newImageUrl = imageResult.secure_url;
        updateData.image = newImageUrl;
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
