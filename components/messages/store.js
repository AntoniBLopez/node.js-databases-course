const Model = require('./model-organization')

function addMessageToDB(userMessageData) {
    const userMessage = new Model(userMessageData)
    userMessage.save()
}

async function getListMessages(specificUserId) {
    if (specificUserId !== null) {
        const specificUserMessage = await Model.find({_id: specificUserId})
        return specificUserMessage
    } else {
        const listOfMessagesToDB = await Model.find()
        return listOfMessagesToDB
    }
}

async function updateMessage(id, updatedMessage) {
    const foundMessage = await Model.findById(id)
    foundMessage.message = updatedMessage
    const newMessage =  await foundMessage.save()

    return newMessage
}

function deleteMessage(id) {
    return Model.deleteOne({_id: id})
}

module.exports = {
    addMessageToDB,
    getListMessages,
    //getspecific
    updateMessage,
    deleteMessage
}