const express = require("express");
const router = express.Router();
const user = require("../model/User");
const bcrypt = require("bcrypt");

//login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      typeof email !== "string" ||
      !email.trim() ||
      typeof password !== "string" ||
      !password
    ) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }
    const loginuser = await user.findOne({ email: email.trim().toLowerCase() });
    if (loginuser != null) {
      const passwordMatch = await bcrypt.compare(password, loginuser.password);
      if (passwordMatch == true) {
        return res.status(200).json({ message: "Login successful" });
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

//create user
router.post("/create-user", async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    if (
      typeof fullname !== "string" ||
      !fullname.trim() ||
      typeof email !== "string" ||
      !email.trim() ||
      typeof password !== "string" ||
      password.length < 6
    ) {
      return res.status(400).json({
        message:
          "Please provide valid fullname, email and password (minimum 6 characters)",
      });
    }
    const existUser = await user.findOne({ email: email.trim().toLowerCase() });
    if (existUser != null) {
      return res.status(400).json({ message: "email already exist" });
    } else {
      const hassedPasswrod = await bcrypt.hash(password, 10);
      const createUser = await user.create({
        fullname: fullname.trim(),
        email: email.trim().toLowerCase(),
        password: hashedPassword,
      });
      return res.status(201).json({ message: "account created sucessfully" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
