const bcrypt = require("bcrypt");

module.exports.createUser = (req, res, next) => {
  const { name, email, password, about, avatar } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hash) => {})
    .catch((error) => {
      console.log("Erro ao criar usuário", error);
      return res.status(500).send({ message: error.message });
    });
};
