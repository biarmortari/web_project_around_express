const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { errors } = require("celebrate");

const authRoute = require("./routes/auth.route");
const userRoute = require("./routes/users.route");
const cardsRoute = require("./routes/cards.route");

const errorMiddleware = require("./middleware/error.middleware");

app.use(express.json());

const { PORT = 3000 } = process.env;

mongoose.connect("mongodb://localhost:27017/aroundb");

app.use((req, res, next) => {
  req.user = {
    _id: "692606ff175b3a895350d06d",
  };

  next();
});

app.use(authRoute);
app.use("/users", userRoute);
app.use("/cards", cardsRoute);

app.use(errors());
app.use(errorMiddleware);

app.use((req, res) => {
  res.status(404).send({ message: "A solicitação não foi encontrada" });
});

app.listen(PORT, () => {
  console.log(`O app está executando na porta ${PORT}`);
});
