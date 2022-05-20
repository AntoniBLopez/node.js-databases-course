const dbLibrary = require('mongoose');

const Schema = dbLibrary.Schema;

const mySchema = new Schema({ // este es un esquema de mongoose y
    // en el objeto que le pasamos como parámetro, definimos las propiedades y tipos de dato que queramos tener.
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat',
    },
    user: [{
        type: Schema.ObjectId,
        ref: 'Users',
    }],
    message: {
        type: String,
        required: true,
    },
    date: Date,
    file: String,
})

// Creamos un Model para indicar que nombre va a tener el esquema y cuál es el esquema que se va a guardar en la BD

// le pasamos 2 parámtros: 1. El nombre de la colección en la BD 2.El esquema de los datos
const model = dbLibrary.model('Messages', mySchema)

module.exports = model