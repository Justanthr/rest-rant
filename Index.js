//Modules and globals
require('dotenv').config()
const express = require('express')
const req = require('express/lib/request')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

//Express settings
app.set('views',  __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(methodOverride('_method'))

//Controllers and routes
app.use(express.urlencoded({ extended: true }))
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('./error404')
})

//Listen for connections 
app.listen(process.env.PORT)
