const store = require('./store')

function getUsers () {
    return store.getUsers()
}

function addUser (name) {
    if(!name) {
        return Promise.reject('Invalid name')
    }

    const user = {
        name,
    }

    return store.addUser(user)
}

module.exports = {
    addUser,
    getUsers,
    // updateUser,
    // deleteUser
}