const express = require("express");
const router = express.Router();

const { createUser } = require("../controllers/users.controller");

router.post("/signup", createUser);
//router.post("/signin");

module.exports = router;
