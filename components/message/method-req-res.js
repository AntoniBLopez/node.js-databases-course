const express = require('express');

const response = require('../../server/query-success-or-error');
const controller = require('./controller')

const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.headers)

    res.header({
        "text": "Hola"
    })

    if (req.query.error == 'true') {
        response.error(req, res, 'Ha habido un error', 400, 'Detalles desde server.js')
    } else {
        response.success(req, res, 'Obtenido correctamente', 202)
    }
})

router.post('/', (req, res) => {

    controller.addMessages(req.body.user, req.body.message)
        .then((resolve) => {
            response.success(req, res, resolve, 202)
        })
        .catch(err => {
            response.error(req, res, 'Información invalida', 402, `Error en el controller: Error:${err}`)
        })
})

module.exports = router;