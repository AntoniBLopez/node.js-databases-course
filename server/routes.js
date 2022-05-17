// const express = require('express');
const message = require('../components/message/method-req-res')

const router = server => { // server = app
    server.use('/message', message)
}

module.exports = router;