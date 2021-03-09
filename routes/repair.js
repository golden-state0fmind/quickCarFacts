require ('dotenv').config();
const express=require('express')
const db=null
const router = express.Router()
const axios=require('axios')

//Local Variables 
// let vin= '1NXBR30E56Z572979'
// let mileage = 175000
// let baseURL = `http://api.carmd.com/v3.0/decode?vin=${vin}&mileage=${mileage}`;
// //Gets car info based on the VIN number of the vehicle
// //Info retrieved is upcoming mechanic work
// axios.get(baseURL, { 
//     headers: { 
//         'Authorization': process.env.API_KEY,
//         'partner-token':process.env.PARTNER_TOKEN
//     }})
// .then(response => {
//     console.log(response.data);
// })
// .catch((error) => {
//     console.log('error ' + error);
// });

router.get('/', function(req,res){
    res.render('repair')
})

module.exports=router