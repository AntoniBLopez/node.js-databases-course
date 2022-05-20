const store = require('./store')

function addMessage (chat, user, message, file) {
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message || !file) {
            console.error('[message controller] Estoy en Reject, no hay usuario o mensaje')
            reject('Los datos son incorrectos. Notificación desde el archivo controller desde una Promise')
        }

        let fileUrl = ''
        if (file) {
            fileUrl = `http://localhost:3000/app/files/${file.filename}`
        }

        const fullMessage = {
            chat,
            user,
            message,
            date: new Date(),
            file: fileUrl
        }
        store.addMessageToDB(fullMessage)
        resolve(fullMessage)
    })
}

function getMessages (specificChat) {
    return new Promise((resolve, reject) => {
        resolve(store.getListMessages(specificChat))
    })
}

function updateMessage (id, updatedMessage) {
    return new Promise(async (resolve, reject) => {
        if (!id || !updatedMessage) {
            reject('Invalid data')
        }
        const result = await store.updateMessage(id, updatedMessage)
        resolve(result)
    })
}

function deleteMessage (id) {
    return new Promise((resolve, reject) => {
        if(!id) {
            reject('Invalid Id')
        }
        store.deleteMessage(id)
            .then(() => {
                resolve()
            })
            .catch(err => {
                reject(err)
            })
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}