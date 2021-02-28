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
app.use(ejsLayouts)
app.use(express.static(__dirname + '/public'))


app.get('/', function (req, res) {
    let vin= '1NXBR30E56Z572979'
    let mileage = 175000
    let baseURL = `http://api.carmd.com/v3.0/decode?vin=${vin}`;
    axios.get(baseURL).then(function (apiResponse){
        let carInfo = apiResponse.data.results
        console.log(carInfo)
    })
})

let server = app.listen(port, function (){
    console.log('... listening on', port)
})

module.exports=server;