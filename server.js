const express = require('express');        // importa o framework Express
const app = express();                     // cria uma aplicação Express
const port = 3000;                         // porta onde o servidor vai ouvir

// Rota principal - GET /
app.get('/', (req, res) => {
  res.send('Hello, PH Lab! 🚀');
});

// Rota de healthcheck - GET /health
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Servidor rodando direitinho 😄' });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor ouvindo em http://localhost:${port}`);
});
