const mongoose =require('mongoose')

const citySchema = new mongoose.Schema({
    city:{
        type:String,
        required :true,
        unique :true
    }
})
module.exports = mongoose.model('demo-city',citySchema)