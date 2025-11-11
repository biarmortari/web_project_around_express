const fs = require("fs");
const path = require("path");
const router = require("express").Router();

const usersPath = path.join(__dirname, "../data/users.json");

router.get("/", (req, res) => {
  fs.readFile(usersPath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send({ message: "Ocorreu um erro no servidor" });
    }

    const users = JSON.parse(data);
    res.send(users);
  });
});

router.get("/:id", (req, res) => {
  fs.readFile(usersPath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send({ message: "Ocorreu um erro no servidor" });
    }

    const users = JSON.parse(data);
    const userId = req.params.id;
    const userFound = users.find((user) => user._id === userId);

    if (!userFound) {
      return res.status(404).send({ message: "ID de usuário não encontrado" });
    }

    res.send(userFound);
  });
});

module.exports = router;
