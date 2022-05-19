const express = require('express');
const bodyParser = require('body-parser');

const connect = require('./db-connections')
const router = require('./server/routes')

connect()

const app = express()
app.use(bodyParser.json())
router(app) // este código siempre tiene que ir después que el de arriba = app.use(bodyParser.json()) si no no funciona

app.use('/app', express.static('public'))

app.listen(3000);
console.log('App escuchando en el puerto http://localhost:3000')