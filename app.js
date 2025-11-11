const express = require("express");
const app = express();

const { PORT = 3000 } = process.env;

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
