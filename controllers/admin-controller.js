const { json } = require("express");
const User = require("../models/user-model");
const Contact = require("../models/contact-model");
// ____________________________
//  Get All Users Data
// ____________________________

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    console.log(users);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No user found" });
    }
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
// ____________________________
//   Users  Delete Logic
// _______
const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};
/ ____________________________
//  Single  Users Logic
// _______
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.findOne({ _id: id },{password:0});
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};


// ____________________________
//  Get All Users Contacts Data
// ____________________________

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    console.log(contacts);
    return res.status(200).json(contacts);
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No Contact Found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllUsers, getAllContacts, deleteUserById,getUserById };
