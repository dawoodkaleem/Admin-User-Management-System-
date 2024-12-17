const express = require("express");
const services = require("../controllers/servicce-controller");
const router = express.Router();

router.route("/service").get(services);
