const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUserById,
  createUser,
  updateProfile,
  updateAvatar,
} = require("../controllers/users");

router.post("/signup", createUser);
router.post("/signin");

module.export = router;
