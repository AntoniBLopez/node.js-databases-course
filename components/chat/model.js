const dbLibrary = require('mongoose');

const Schema = dbLibrary.Schema;

const mySchema = new Schema({
    users: [
        {
            type: Schema.ObjectId,
            ref: 'Users'
        },
        {
            type: Schema.ObjectId,
            ref: 'Messages'
        }
    ],
})

// Creamos un Model para indicar que nombre va a tener el esquema y cuál es el esquema que se va a guardar en la BD

// le pasamos 2 parámtros: 1. El nombre de la colección en la BD 2.El esquema de los datos
const model = dbLibrary.model('Chat', mySchema)

module.exports = model