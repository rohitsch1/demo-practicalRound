const axios = require('axios')

const outSideAPI = async function(req,res,next){
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
    next()
    
}
    catch (error) {
        return res.status(500).send({code:500, msg :error.message})
    }
}

module.exports={
    outSideAPI
}
