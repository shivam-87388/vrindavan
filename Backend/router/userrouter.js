const express = require('express');
const router = express.Router();
const user = require("../model/User");


router.post('/create-user', async(req, res) => {
 try {
    const existUser = await user.findOne({email:req.body.email});
   if (existUser!= null) {
    return res.status(400).json({message:"email already exist"})

   } else {
  const createUser = await user.create({
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