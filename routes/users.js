const router = require("express").Router();

const { getUsers, getUserById, createUser } = require("../controllers/users");

router.get("/", getUsers);

router.post("/:userId", getUserById);

router.post("/", createUser);

module.exports = router;
