const store = require('./store')

function addMessages (user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[message controller] Estoy en Reject, no hay usuario o mensaje')
            reject('Los datos son incorrectos. Notificación desde el archivo controller desde una Promise')
        } else {
            const dataUser = {
                user,
                message,
                date: new Date()
            }

            store.addMessageToList(dataUser)
            resolve(dataUser)
        }
    })
}

function getMessages () {
    return new Promise((resolve, reject) => {
        resolve(store.getListMessages())
    })
}

module.exports = {
    addMessages,
    getMessages
}