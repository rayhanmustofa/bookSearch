const express = require('express')
const { connect } = require(`./config/mongodb`)
const app = express()
const cors = require(`cors`)
const port = 3000
const controller = require('./controllers/controller')

require('dotenv').config()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', controller.findBooks)
app.get('/favourites', controller.getFavourites)
app.post('/favourites', controller.addFavourites)

connect().then((database) => {
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})