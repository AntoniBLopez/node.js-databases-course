const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response')

const router = express.Router()
var app = express()

app.use(bodyParser.json())
app.use(router) // este código siempre tiene que ir después que el de arriba = app.use(bodyParser.json()) si no no funciona

router.get('/message', (req, res) => {
    console.log(req.headers)
    res.header({
        "text": "Hola"
    })

    if (req.query.error == 'true') {
        response.error(req, res, 'Ha habido un error', 400)
    } else {
        response.success(req, res, 'Obtenido correctamente', 202)
    }
})

router.post('/message', (req, res) => {
    res.send('Hola desde POST!!!! con router. Producto añadido')
})

app.use('/app', express.static('public'))

// app.use('/home', (req, res) => {
//     res.send('Hola')
// })

app.listen(3000);

console.log('App escuchando en el puerto http://localhost:3000')