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
            console.log(dataUser)
            resolve(dataUser)
        }
    })
}

module.exports = {
    addMessages,
}