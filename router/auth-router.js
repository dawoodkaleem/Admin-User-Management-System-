const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validtor");
const validate = require("../midderwares/validate-middleware");
const { loginSchema } = require("../validators/login-validtor");
const authMiddleware = require("../midderwares/auth-middleware");
// app.use();

// router.get("/", (req, res) => {
//   res.status(200).send("welcome to the Using router Bckend ");
// });

router.route("/").get(authcontrollers.home);
router
  .route("/register")
  .post(validate(signupSchema), authcontrollers.register);
router.route("/login").post(validate(loginSchema), authcontrollers.login);

router.route("/user").get(authMiddleware, authcontrollers.user);

module.exports = router;
