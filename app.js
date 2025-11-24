const express = require("express");
const mongoose = require("mongoose");
const app = express();

const { PORT = 3000 } = process.env;

mongoose.connect("mongodb://localhost:27017/aroundb");

const userRoute = require("./routes/users");

const cardsRoute = require("./routes/cards");

app.listen(PORT, () => {
  console.log(`O app está executando na porta ${PORT}`);
});

app.use("/users", userRoute);

app.use("/cards", cardsRoute);

app.use((req, res) => {
  res.status(404).send({ message: "A solicitação não foi encontrada" });
});
