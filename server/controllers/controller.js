const Favourite = require("../models/favourite")
const { default: axios } = require('axios')

class controller {
    static async findBooks(req, res) {
        try {
            let data = []
            const { query } = req.query
            if (query) {
                let result = await axios({
                    method: 'get',
                    url: `https://www.googleapis.com/books/v1/volumes?q=${query}`,
                })
                data = result.data.items.map((el) => {
                    return {
                        title: el.volumeInfo.title,
                        image: el.volumeInfo.imageLinks.smallThumbnail,
                        authors: el.volumeInfo.authors,
                        rating: el.volumeInfo.averageRating
                    }
                })
            }
            res.status(200).json(data)
        } catch (err) {
            console.log(err)
        }
    }

    static async getFavourites(req, res) {
        try {
            const result = await Favourite.findAll()
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
        }
    }


    static async addFavourites(req, res) {
        try {
            // console.log(req.body.data,`<<<`)
            const result = await Favourite.create((req.body.data))
            res.status(201).json(result)
        } catch (error) {
            console.log(error)
        }
    }


}

module.exports = controller