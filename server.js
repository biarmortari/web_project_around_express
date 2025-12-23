const app = require("./app");
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`O app está executando na porta ${PORT}`);
});
