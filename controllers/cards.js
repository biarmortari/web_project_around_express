const Card = require("../models/card");

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch(() => res.status(500).send({ message: `Erro ao buscar cartões` }));
};

module.exports.createCard = (req, res) => {
  console.log(req.user._id);
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res
          .status(400)
          .send({ message: "Dados inválidos para criação do cartão" });
      }
      return res.status(500).send({ message: "Erro interno ao criar cartão" });
    });
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndDelete(req.params.cardId)
    .orFail()
    .then((card) => {
      res.send(card);
    })
    .catch((err) => {
      if (err.name === "CastError") {
        return res.status(400).send({ message: "ID inválido" });
      }
      if (err.name === "DocumentNotFoundError") {
        return res.status(404).send({ message: "Card não encontrado" });
      }
      return res
        .status(500)
        .send({ message: "Error interno ao deletar cartão" });
    });
};
