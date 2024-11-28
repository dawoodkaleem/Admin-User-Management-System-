const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
// app.use();

// router.get("/", (req, res) => {
//   res.status(200).send("welcome to the Using router Bckend ");
// });

router.route("/").get(authcontrollers.home);

router.route("/register").post(authcontrollers.register);
router.route("/login").post(authcontrollers.login);

module.exports = router;
