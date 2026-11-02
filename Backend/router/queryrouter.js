const express = require("express");
const router = express.Router();
const Queryform = require("../model/Querymodel");

// get methd
router.get("/all-query",async(req,res)=>{
    try {
        const query = await Queryform.find()
        return res.status(200).json({message:"query fetch successfully"})
    } catch (error) {
         return res.status(500).json({ message: error.message });
    }
});
// add query
router.post("/submit-query", async(req, res)=>{
    try {
        const query = await Queryform.create({fullname:req.body.fullname, email:req.body.email, phonenumber:req.body.phonenumber,subject:req.body.subject, message:req.body.message})
        return res.status(200).json({message:"query submitted  successfully"})
    } catch (error) {
         return res.status(500).json({ message: error.message });
    }
});

module.exports = router;