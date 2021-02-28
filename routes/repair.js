const express=require('express')
const db=null
const router = express.Router()
const axios=require('axios')

router.get('/'), function(req,res){
    res.send('Repair Page')
}

module.exports=router