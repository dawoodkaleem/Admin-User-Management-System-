const express = require("express");
// const router =express.Router();
// const home= require("../controllers/auth-controller")
// const bcrypt = require("bcrypt");
const bcrypt = require("bcrypt");
// Home Logic

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to the best backend PRactics course");
  } catch (error) {
    console.log(error);
  }
};
//*====================
// Registration Logic
//*====================

// 1 get the registration data
const User = require("../models/user-model");

const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "email alredy exits" });
    }

    // Hash the password hash
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });
    res.status(201).json({
      msg: "registretion successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // res.status(400).send("welcome to registration page", error.message);
    res.status(500).json({
      msg: "An error occurred during registration",
      error: error.message,
    });
  }
};

//*====================
// User login  Logic
//*====================
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    console.log(userExist);
    if (userExist) {
      return res.status(400).json({ msg: " Invalid Credentaials" });
    }
    const user = await bcrypt.compare(password, userExist.password);
    if (user) {
      res.status(200).json({
        msg: "Login  successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

module.exports = { home, register, login };
