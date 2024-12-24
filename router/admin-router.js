const express = require("express");
const adminController = require("../controllers/admin-controller");
const router = express.Router();
const authMiddleware = require("../midderwares/auth-middleware");

router
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminController.getAllUsers);
router.route("/contacts").get(authMiddleware, adminController.getAllContacts);

module.exports = router;
