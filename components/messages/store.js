const Model = require('./model-organization')

function addMessageToDB(userMessageData) {
    const userMessage = new Model(userMessageData)
    userMessage.save()
}

function getListMessages(specificChat) {
    return new Promise((resolve, reject) => {
        let filter = {}

        if (specificChat !== null) {
            filter = {chat: specificChat}
        }
        Model.find(filter)
            .populate('user')
            .exec((err, populated) => {
                if(err) {
                    reject(err)
                }
                resolve(populated)
            })
    })
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