const Card = require("../models/card");

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ cards }))
    .catch((err) =>
      res.status(500).send({ message: `Erro ao buscar cartões` })
    );
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  if (!name || !link) {
    return res
      .status(400)
      .send({ message: `O nome do cartão e a URL são obrigatórios` });
  }
  Card.create({ name, link })
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(404).send({ message: `Erro ao criar cartão` }));
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndDelete(req.params.cardId).then((card) => {
    if (!card) {
      return res.status(404).send({ message: `Cartão não encontrado` });
    }
    res.send(card);
  });
  res.send({ data: card });
  res.status(500).send({ message: `Erro ao deletar cartão` });
};
