const { MongoClient } = require('mongodb')
require('dotenv').config()

const uri = `mongodb+srv://rayhanmustofa:${process.env.ATLAS_PW}@cluster0.hccqbjl.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri)
// console.log(client)
let database

async function connect() {
    try {
        await client.connect()
        database = client.db('travelio')
    } catch (err) {
        console.log(err)
    }
}

function getDatabase() {
    return database
}

module.exports = {
    connect,
    getDatabase
}