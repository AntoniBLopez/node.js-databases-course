require('dotenv').config()
const dbLibrary = require('mongoose');

const uriMongodb = process.env.DB_URI_MONGODB

dbLibrary.Promise = global.Promise // le pedimos a mongoose que en vez de utilizar las callback por defecto que utilize las Promises

async function connect () {
    await dbLibrary.connect(uriMongodb, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('[db] Conectada con éxito'))
        .catch(err => console.error('[db] Error:', err));
}

module.exports = connect