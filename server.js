const mongoose = require('mongoose');
const path = require("path")
const morgan = require("morgan")
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)

const uri = 'mongodb+srv://admin:admin@sisis.lnzidxa.mongodb.net/test';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión establecida correctamente a la base de datos', ))
    .catch(err => console.error('Error al conectarse a la base de datos', err));

module.exports = mongoose;