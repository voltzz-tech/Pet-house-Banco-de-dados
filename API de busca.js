const express = require('express');
const app = express();
const db = require('./db');

app.get('/api/pets', (req, res) => {
  const query = "SELECT name, species, breed, description FROM pets WHERE status = 'available'";
  
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));