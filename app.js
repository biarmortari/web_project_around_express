import express from "express";

const { PORT = 3000 } = process.env;

const app = express();
app.listen(PORT, () => {
  console.log(`O app está executando na porta ${PORT}`);
});

app.get("/users/:id", (req, res) => {
  if (!users[req.params.id]) {
    res.status(404).send("ID do usuário não encontrado");
    return;
  }
  res.send(users[req.params.id]);
});
