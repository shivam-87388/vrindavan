const express = require('express');
const router = express.Router();
const adminuser = require("../model/Adminuser");

//login
router.post('/login', async(req,res)=>{
  try {
    const loginuser = await adminuser.findOne({email:req.body.email})
   if (loginuser!=null) {
      if (loginuser.password == req.body.password) {
        return res.status(200).json({message:"Login successful"})
      } else {
        return res.status(401).json({message:"password is incorrect"})
        
      }
   } else {
    return res.status(404).json({message:"user does not exist"})

   }

  } catch (error) {
    return res.status(500).json({message:error.message})
  }
});

//create account
router.post('/create-user', async(req, res) => {
 try {
    const existUser = await adminuser.findOne({email:req.body.email});
   if (existUser!= null) {
    return res.status(400).json({message:"email already exist"})

   } else {
  const createUser = await adminuser.create({
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password,
  })
  return res.status(200).json({message:"account created sucessfully"})  
   }
 } catch (error) {
return res.status(500).json({message:"error.message"})
 }
})


module.exports = router;