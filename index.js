require ('dotenv').config();
const express =require('express')
const axios = require ('axios')
const ejsLayouts=require ('express-ejs-layouts')
const app = express()
const port = process.env.PORT || 3000
//Make sure to require your models in the fields where they will be used. 
// const db = require('./models')
//View engine
app.set('view engine', 'ejs')
//Middleware
app.use(require('morgan')('dev'))
app.use(express.urlencoded({extended:false}))
app.use(ejsLayouts)
app.use(express.static(__dirname + '/public/'))


app.get('/', function (req, res) {
    res.render('index')
})

//Import all routes from the routes directory
app.use('/repair',require('./routes/repair'))

//Server
let server = app.listen(port, function (){
    console.log('... listening on', port)
})

module.exports=server;