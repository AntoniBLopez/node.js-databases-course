require('dotenv').config()
const dbLibrary = require('mongoose');
const Model = require('./model-organization')

dbLibrary.Promise = global.Promise // le pedimos a mongoose que en vez de utilizar las callback por defecto que utilize las Promises

const uriMongodb = process.env.DB_URI_MONGODB

dbLibrary.connect(uriMongodb, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('[db] Conectada con éxito'))
    .catch(err => console.error('[db] Error:', err));


function addMessageToDB(userMessageData) {
    const userMessage = new Model(userMessageData)
    userMessage.save()
}

async function getListMessages() {
    const listOfMessagesToDB = await Model.find()
    return listOfMessagesToDB
}

async function updateMessage(id, updatedMessage) {
    const foundMessage = await Model.findById(id)
    foundMessage.message = updatedMessage
    const newMessage =  await foundMessage.save()

    return newMessage
}

module.exports = {
    addMessageToDB,
    getListMessages,
    updateMessage
    //getspecific
    //delete
}