const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

require('dotenv').config();


dotenv.config();


app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); 



const sequelize = require('../src/database'); // Ajusta la ruta según tu estructura de directorios


app.use('/', require('./routes'));
app.use(express.static('public'));



const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
