require("dotenv").config();
const express = require("express");
const cors = require("cors");
const newsRoutes = require("./routes/newsRoutes");

const app = express();

app.use(cors());
app.use(express.json()); // Permite receber JSON no body das requisições

app.use("/news", newsRoutes); // Define as rotas da API

const PORT = process.env.PORT || 3333;

module.exports = app;

if (require.main === module) {
  // Inicia o servidor apenas quando rodar diretamente, não ao importar
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}
