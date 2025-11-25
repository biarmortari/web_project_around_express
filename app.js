const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const { PORT = 3000 } = process.env;

mongoose.connect("mongodb://localhost:27017/aroundb");

const userRoute = require("./routes/users");
const cardsRoute = require("./routes/cards");

app.use("/users", userRoute);
app.use("/cards", cardsRoute);

app.use((req, res, next) => {
  req.user = {
    _id: "692606ff175b3a895350d06d",
  };

  next();
});

app.post("/debug", (req, res) => {
  console.log("BODY RECEBIDO:", req.body);
  res.send({ body: req.body });
});

app.use((req, res) => {
  res.status(404).send({ message: "A solicitação não foi encontrada" });
});

app.listen(PORT, () => {
  console.log(`O app está executando na porta ${PORT}`);
});
