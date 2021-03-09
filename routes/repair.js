const express=require('express')
const db=null
const router = express.Router()
const axios=require('axios')
const dotenv =require('dotenv')
dotenv.config()

// router.get('/', function(req,res){
//     let vin= '1NXBR30E56Z572979'
//     let mileage = 175000
//     let baseURL = `http://api.carmd.com/v3.0/decode?vin=${vin}`;
//     axios.get(baseURL).then(function (apiResponse){
//         let carInfo = apiResponse.data.results
//         console.log(carInfo)
//     })
//     res.render('repair',{carInfo:carInfo})
//     res.send('hello from repair shops')
// })

axios.get('http://api.carmd.com/v3.0/decode?vin=1NXBR30E56Z572979', { 
    headers: { 
        'Authorization': process.env.API_KEY,
        'partner-token':process.env.PARTNER_TOKEN
    }})
.then(response => {
    console.log(response.data);
})
.catch((error) => {
    console.log('error ' + error);
});

router.post('/', function(req,res){
    res.redirect('/repair')
})

module.exports=router