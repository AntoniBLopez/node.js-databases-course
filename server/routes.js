// const express = require('express');
const message = require('../components/messages/method-req-res')
const user = require('../components/users/network')

const router = server => { // server = app
    server.use('/message', message)
    server.use('/user', user)
}

module.exports = router;