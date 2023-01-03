const express= require('express')
const bodyParser = require('body-parser')
const route =require ('./route/router')
const PORT= 3000
const mongoose = require('mongoose')


const app=  express()

//mongoose connect
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://Rohitsch:S*Crohit16@cluster0.31aen.mongodb.net/demo-practice',{
    useNewUrlParser:true
}).then(()=>{console.log("mongoDb is connect")})
.catch(err=>{console.log(err)})


app.use(bodyParser.json())

//route 
app.use('/',route)


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})