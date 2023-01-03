const mongoose =require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    city:{
        type:String,
    },
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    Id:{
        type: Number
    }
})
module.exports = mongoose.model('user-Demo',userSchema)



// Post API should have 2 (three) mandatory parameters name and city.
// • Post API should have 2 (two) optional parameters mobile and media url.
// • Post API should have 1(one) invisible (server side) parameter ID.
// • ID parameter should take the value of Step 3, Output servertime.
// • Name parameter should allow only Alphabets in upper/ small case.
// • Name parameter should not allow numeric/ special characters.
// • City parameter should accept only city names available in database.
// • Mobile parameter should allow only numeric characters.
// • Media url parameter should allow string with https:// only.
// • Once the user details have been inserted, provide the response via status codes along with
// inserted user details and ID.
// // 