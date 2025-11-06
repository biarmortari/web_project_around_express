import express from "express";

const { PORT = 3000 } = process.env;

const app = express();
app.listen(PORT, () => {
  console.log(`O app está executando na porta ${PORT}`);
});
