// db.js - Arquivo de configuração da conexão
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'pethouse'
});

connection.connect(error => {
  if (error) throw error;
  console.log("Conectado ao banco pethouse com sucesso!");
});

module.exports = connection;