import express, { Router } from 'express';
import bodyParser from 'body-parser'

const router = Router()
var app = express()

app.use(bodyParser.json())
app.use(router) // este código siempre tiene que ir después que el de arriba = app.use(bodyParser.json()) si no no funciona

router.get('/message', (req, res) => {
    console.log(req.headers)
    res.header({
        "text": "Hola"
    })
    res.send(`Hola desde GET!!!! con router. Mensaje obtenido`)
})

router.post('/message', (req, res) => {
    res.send('Hola desde POST!!!! con router. Producto añadido')
})

// app.use('/home', (req, res) => {
//     res.send('Hola')
// })

app.listen(3000);

console.log('App escuchando en el puerto http://localhost:3000')