const { Axios, default: axios } = require('axios')
const cityModel = require('../model/cityModel')


const cityName = async function(req,res){
    try {
        let data = req.body.city

        //city validation 
        if(!data) return res.status(400).send({msg : "give city name "})
        if(!(/^[A-Za-z]+$/.test(city))) return res.status(300).send({code :300, msg :"city is not in correct formate"})

        //finding its unique or not
        let findcity = await cityModel.findOne({city:data})
        if(findcity) return res.status(400).send({code :400, msg :"city is already present "})

        //creating Document for city
        let saveData = await cityModel.create(data)
        return res.status(201).send({code : 201 ,msg: saveData})
        
    } catch (error) {
        return res.status(500).send({code: 500, msg :error.message})
    }
}


const citylist = async function(req,res){
    try {
        let findCity= await cityModel.find()
        //checking city document is present or not
        if(findCity.length>0){
            return res.status(200).send({code :200 ,msg:findCity})
        }else{
            return res.status(404).send({code :404 ,msg :"No city present in dataBase"})
        }
        
        
    } catch (error) {
        return res.status(500).send({code:500 ,msg :error.message})
    }
}

const OutSideAPI = async function(req,res){
    try{
        console.log("here")
        let options= {
        method:'get',
        url:'https://api.binance.com/api/v1/time'
    }

    let result= await axios(options)
    console.log(result.data)
    req.temp=result.data.serverTime;
    console.log(req.temp)
    return res.status(200).send({code: 200 ,msg :result.data})}
    catch (error) {
        return res.status(500).send({code: 500 ,msg :error.message})
    }
}

module.exports={
    cityName,citylist,OutSideAPI
}