const express = require('express');
const multer = require('multer');

const response = require('../../server/query-success-or-error');
const controller = require('./controller')

const router = express.Router()

const upload = multer({
    dest: 'public/files/'
})

router.get('/', (req, res) => {
    const filterMessages = req.query.chat || null

    controller.getMessages(filterMessages)
        .then(messageList => {
            response.success(req, res, messageList, 200)
        })
        .catch(err => {
            response.error(req, res, 'Unexpected Error', 500, err)
        })
})

router.post('/', upload.single('file'), (req, res) => {
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
        .then(fullMessage => {
            response.success(req, res, fullMessage, 202)
        })
        .catch(err => {
            response.error(req, res, 'Información invalida', 402, `Error en el controller: Error:${err}`)
        })
})

router.patch('/:id', (req, res) => {
    controller.updateMessage(req.params.id, req.body.updatedMessage)
        .then(data => {
            response.success(req, res, data, 202)
        })
        .catch(err => {
            response.error(req, res, 'Error interno', 304, err)
        })
})

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `User ${req.params.id} removed successfully`, 200)
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err)
        })
})

module.exports = router;