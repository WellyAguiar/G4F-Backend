const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('API funcionando!');
});

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
