const router = require("express").Router();

const {
  getUsers,
  getUserById,
  createUser,
  updateProfile,
} = require("../controllers/users");

router.get("/", getUsers);

router.post("/:userId", getUserById);

router.post("/", createUser);

router.patch("/me", updateProfile);

module.exports = router;
