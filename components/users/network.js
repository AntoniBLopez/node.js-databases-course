const express = require('express');

const response = require('../../server/query-success-or-error');
const controller = require('./controller')

const router = express.Router()

router.get('/', (req, res) => {
    // const specificUserName = req.query.userName || null

    controller.getUsers()
        .then(listOfUsers => {
            response.success(req, res, listOfUsers, 202)
        })
        .catch(err => {
            response.error(req, res, 'Unexpected Error', 404, err)
        })
})

router.post('/', (req, res) => {
    controller.addUser(req.body.name)
        .then(data => {
            response.success(req, res, data, 201)
        })
        .catch(err => {
            response.error(req, res, 'Internal Error', 500, `Error en el controller: ${err}`)
        })
})

module.exports = router