const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

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
    .orFail()
    .then((user) => {
      res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === "CastError") {
        return res.status(400).send({ message: "ID inválido" });
      }
      if (err.name === "DocumentNotFoundError") {
        return res.status(404).send({ message: "Usuário não encontrado" });
      }
      return res
        .status(500)
        .send({ message: "Erro interno ao buscar usuário" });
    });
};

module.exports.createUser = async (req, res) => {
  const { email, password, name, about, avatar } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
      name,
      about,
      avatar,
    });

    const userResponse = user.toObject();
    delete userResponse.password;

    return res.status(201).send({ data: userResponse });
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).send({ message: "Dados inválidos" });
    }
    if (err.code === 11000) {
      return res.status(409).send({ message: "Este e-mail já está em uso" });
    }
    return res.status(500).send({ message: "Erro interno no servidor" });
  }
};

module.exports.updateProfile = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true }
  )
    .orFail()
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(400).send({ message: "Dados inválidos" });
      }
      if (err.name === "CastError") {
        return res.status(400).send({ message: "ID inválido" });
      }
      if (err.name === "DocumentNotFoundError") {
        return res.status(404).send({ message: "Usuário não encontrado" });
      }
      return res
        .status(500)
        .send({ message: "Erro interno ao buscar usuário" });
    });
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true }
  )
    .orFail()
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(400).send({ message: "Dados inválidos" });
      }
      if (err.name === "CastError") {
        return res.status(400).send({ message: "ID inválido" });
      }
      if (err.name === "DocumentNotFoundError") {
        return res.status(404).send({ message: "Usuário não encontrado" });
      }
      return res
        .status(500)
        .send({ message: "Erro interno ao atualizar avatar" });
    });
};
