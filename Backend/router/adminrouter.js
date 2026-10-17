const express = require("express");
const router = express.Router();
const adminuser = require("../model/Adminuser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const auth = require("../middleware/auth");

//login
router.post("/login", async (req, res) => {
  try {
    const loginuser = await adminuser.findOne({ email: req.body.email });
    if (loginuser != null) {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        loginuser.password,
      );
      if (passwordMatch == true) {
        const payload = {
          id: loginuser._id,
          email: loginuser.email,
        };
        // Generate token with an expiration time
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1 day",
        });
        return res
          .status(200)
          .json({ message: "Login successful", token: token });
      } else {
        return res.status(401).json({ message: "password is incorrect" });
      }
    } else {
      return res.status(404).json({ message: "user does not exist" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

//create account
router.post("/create-user", async (req, res) => {
  try {
    const existUser = await adminuser.findOne({ email: req.body.email });
    if (existUser != null) {
      return res.status(400).json({ message: "email already exist" });
    } else {
      const hassedPasswrod = await bcrypt.hash(req.body.password, 10);
      const createUser = await adminuser.create({
        fullname: req.body.fullname,
        email: req.body.email,
        password: hassedPasswrod,
      });
      return res.status(200).json({ message: "account created sucessfully" });
    }
  } catch (error) {
    return res.status(500).json({ message:error.message});
  }
});

module.exports = router;
