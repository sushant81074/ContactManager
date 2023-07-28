const express = require("express");
const router = express.Router();

const {
  userRegister,
  userLogin,
  currentUser,
} = require("../controllers/userController");

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/current", currentUser);

module.exports = router;
