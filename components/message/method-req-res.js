const express = require('express');

const response = require('../../server/query-success-or-error');
const controller = require('./controller')

const router = express.Router()

router.get('/', (req, res) => {
    controller.getMessages()
        .then((messageList) => {
            response.success(req, res, messageList, 200)
        })
        .catch(err => {
            response.error(req, res, 'Unexpected Error', 500, err)
        })
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