const { getDatabase } = require("../config/mongodb")
const { ObjectId } = require('mongodb')

class Favourite {
    static favourites() {
        const database = getDatabase()
        return database.collection('favourites')
    }

    static async findAll() {
        try {
            const favourites = this.favourites()
            const result = await favourites.find().toArray()
            return result

        } catch (error) {
            console.log(error)
        }
    }

    static async create(data) {
        try {
            const favourites = this.favourites()
            const result = await favourites.insertOne(data)

            return result

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Favourite