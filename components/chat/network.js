const express = require('express');

const response = require('../../server/query-success-or-error');
const controller = require('./controller')

const router = express.Router()

router.post('/', (req, res) => {
    controller.addChat(req.body.users)
        .then(data => {
            response.success(req, res, data, 201)
        })
        .catch(err => {
            response.error(req, res, 'Internal Error', 500, `Error en el controller: ${err}`)
        })
})

router.get('/:userId', (req, res) => {
    controller.getListChats(req.params.userId)
        .then(chatList => {
            response.success(req, res, chatList, 202)
        })
        .catch(err => {
            response.error(req, res, 'Internal Error', 500, err)
        })
})

module.exports = router