const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { Sequelize } = require('sequelize');

// Crea una instancia de Express
const app = express();

// Configura middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('combined')); // Puedes personalizar los registros de Morgan según tus necesidades

// Configura la vista EJS (si deseas utilizar EJS como motor de plantillas)
app.set('view engine', 'ejs');

// Configura la conexión a la base de datos utilizando Sequelize
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'mi_basededatos',
});

// Define modelos y relaciones de Sequelize aquí (por ejemplo, Usuario, Producto, etc.)

// Inicia el servidor
const PORT = process.env.PORT || 3206;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
