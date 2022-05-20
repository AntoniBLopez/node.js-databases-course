// const express = require('express');
const message = require('../components/messages/method-req-res')
const user = require('../components/users/network')
const chat = require('../components/chat/network')

const router = server => { // server = app
    server.use('/messages', message)
    server.use('/users', user)
    server.use('/chat', chat)
}

module.exports = router;