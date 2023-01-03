const userModel =require('../model/userModel')
const cityModel =require('../model/cityModel')
const cityController =require('../controller/cityController')


const createUser = async function(req,res){
try {
    let {name ,city,mobile}=req.body
    //validation for name ,city ,mobile
    if(!(/^[A-Za-z]+$/.test(name))) return res.status(300).send({msg :"name is not in correct formate"})
    if(!(/^[A-Za-z]+$/.test(city))) return res.status(300).send({msg :"city is not in correct formate"})
    let findCity = await cityModel.findOne({city:city})
    if(!findCity){
        return res.status(300).send({msg :" this city name is not present in Db"})
    }

    if(!(/\d/.test(mobile))) return res.status(300).send({msg :"number should not be alphabet"})
    let phoneNum = await userModel.findOne({mobile:mobile})
    if(phoneNum){
        return res.status(300).send({msg :" this cphone number is present already"})
    }
    console.log(req.temp)
    let document ={
        name :name,
        city:city,
        mobile:mobile,
        Id:req.temp//id 
    }
//creation of user in DB 
    let displayUser = await userModel.create(document)
    return res.status(201).send({code:201,msg:displayUser})

    
} catch (error) {
    return res.status(500).send({code:500,msg:error.message})
}
}

const getUser =async function(req,res){
    try {
        let findUser = await userModel.find()
        if(findUser.length <0) return res.status(404).send({code:404 ,msg :"city is not in correct formate"})
        return res.status(200).send({code:200,msg:findUser})
    } catch (error) {
        return res.status(500).send({code:500,msg:error.message})
    }
}

const updateUser =async function(req,res){
    try {
        
        let {name , city ,mobile} =req.body
        let Id = req.params.userID

        if(name){
            if(!(/^[A-Za-z]+$/.test(name))) return res.status(300).send({code :300 ,msg :"name is not in correct formate"})
        }
        if(city){
            if(!(/^[A-Za-z]+$/.test(city))) return res.status(300).send({code :300 ,msg :"name is not in correct formate"})
        }
        if (mobile) {
            if (!(/\d/.test(mobile))) return res.status(300).send({code :300, msg: "number should not be alphabet" })
            let phoneNum = await userModel.findOne({ mobile: mobile })
            if (phoneNum) {
                return res.status(300).send({ msg: " this cphone number is present already" })
            }

        }
        console.log(Id)
        let checkingID= await userModel.findById(Id)
        if(!checkingID) return res.status(404).send({ code: 404 ,msg: " Data Not found" })
        let updateData=  await userModel.findOneAndUpdate({_id : Id},{
            $set:{
                name:name,
                city:city,
                mobile:mobile
            }

        },{new:true})

        return res.status(200).send({ code : 200 ,msg: updateData})

    } catch (error) {
        return res.status(500).send({code:500,msg:error.message})
    }
}

module.exports={
    createUser,getUser  ,updateUser
}