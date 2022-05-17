const list = []

function addMessageToList(message) {
    list.push(message)
}

function getListMessages() {
    return list
}

module.exports = {
    addMessageToList,
    getListMessages
    //getspecific
    //update
    //delete
}