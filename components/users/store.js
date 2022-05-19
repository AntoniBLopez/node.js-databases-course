const Model  = require('./model')

function getUsers () {
    return Model.find()
}

function addUser (user) {
    const userData = new Model(user)
    return userData.save()
}

module.exports = {
    addUser,
    getUsers
}