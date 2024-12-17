const { response } = require("express");
const Service = require("../models/service-model");
const services = async (req, res) => {
  try {
    response = await Service.find();
    if (!response) {
      res.status(404).json({ msg: "No service found" });
      return;
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(`services:${error}`);
  }
};
module.exports = services;
