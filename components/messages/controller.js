const store = require('./store')

function addMessage (user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[message controller] Estoy en Reject, no hay usuario o mensaje')
            reject('Los datos son incorrectos. Notificación desde el archivo controller desde una Promise')
        }
        const dataUser = {
            user,
            message,
            date: new Date()
        }
        store.addMessageToDB(dataUser)
        resolve(dataUser)
    })
}

function getMessages (specificUserId) {
    return new Promise((resolve, reject) => {
        resolve(store.getListMessages(specificUserId))
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