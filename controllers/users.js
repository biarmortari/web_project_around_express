const User = require("../models/user");

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) =>
      res
        .status(500)
        .send({ message: `Erro ao buscar usuário: ${err.message}` })
    );
};

module.exports.getUserById = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "Usuário não encontrado" });
      }
      res.send({ data: user });
    })
    .catch(() => res.status(500).send({ message: "Erro" }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  if (!name || !about || !avatar) {
    return res
      .status(400)
      .send({ message: "Os campos name, about e avatar são obrigatórios." });
  }

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) =>
      res.status(500).send({ message: `Erro ao criar usuário: ${err.message}` })
    );
};
