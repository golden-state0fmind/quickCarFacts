require ('dotenv').config();
const express=require('express')
const db=null
const router = express.Router()
const axios=require('axios')

//Repair page
router.get('/', function(req,res){
    const vin = req.query.vin;
    const mileage = req.query.mileage;
    //Gets car info based on the VIN number of the vehicle
    //Info retrieved is upcoming mechanic work
    let baseURL = `http://api.carmd.com/v3.0/decode?vin=${vin}&mileage=${mileage}`;
    axios.get(baseURL, { 
        headers: { 
            'Authorization': process.env.API_KEY,
            'partner-token': process.env.PARTNER_TOKEN
        }})
    .then( response => {
        console.log(response.data)
    })
    .catch((error) => {
        console.log('error ' + error);
    });
    res.render('repair')
})

module.exports=router