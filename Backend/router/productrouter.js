const express = require('express');
const router = express.Router();
const product = require("../model/Productmodel");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");

const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // Maximum 5 MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"));
    }
  },
});

//get
router.get('/all-product',async(req,res)=>{
    try {
        const allproduct = await product.find();
        return res.status(200).json({message:"product fetched  sucessful", data:allproduct});
       
    } catch (error) {
        return res.status(500).json({message:error.message});
        
    }

});

//get buy id
router.get('/all-product/:id',async(req,res)=>{
    try {
        const findproduct = await product.findById(req.params.id);
        if (findproduct != null) {
            return res.status(200).json({message:"product fetched  sucessful",data:findproduct});
        } else {
            return res.status(404).json({message:"product not find"});
        }
    
    } catch (error) {
        return res.status(500).json({message:error.message});
        
    }

});

// add product
router.post('/add-product', async(req, res)=>{
    try {
        const productadd = await product.create({
        productname: req.body.productname,
        productcategory: req.body.productcategory,
        productprice: req.body.productprice,
        productquantity: req.body.productquantity,
        productdescription: req.body.productdescription,
        image: req.body.image,
        });
        return res.status(201).json({message:"product add sucessful", data:productadd});
        
    } catch (error) {

    return res.status(400).json({message: "Product not added",error: error.message,});
  }

});

//delete
router.delete('/delete-product/:id',async(req,res)=>{

    try {
        const productdelete = await product.findByIdAndDelete(req.params.id)
        if (productdelete != null) {
            return res.status(200).json({message:"product deleted sucessful"})
            
        } else {
            return res.status(404).json({message:"Product not found"}) 
        }
    } catch (error) {
        return res.status(500).json({message:error.message})
    
    }
    
});

//update
router.put('/update-product/:id', async(req,res)=>{
    try {
        const update_product = await product.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after', runValidators: true })
        if (update_product != null) {
            return res.status(200).json({message:"product update sucessful", data:update_product})
            
        } else {
            return res.status(404).json({message:"product not found"})
            
        }
        
    } catch (error) {
        return res.status(500).json({message:error.message})
        
    }
});




module.exports = router;