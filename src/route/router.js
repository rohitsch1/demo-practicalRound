const express = require("express");
const router = express.Router()
const controller = require('../controller/cityController')
const userController=require('../controller/userController')
const thirdAPI =require('../middleware/thirdApi')

router.get('/test',(req,res)=>{
    res.send("alright")
})
//step 1
router.post('/city',controller.cityName)

//step2
router.get('/city/list',controller.citylist)

//consuming api
router.get('/city/api',controller.OutSideAPI)



//userApi


//create UserAPI
router.post('/user',thirdAPI.outSideAPI,userController.createUser)
//getuser
router.get('/user/list',userController.getUser)
//update User API
router.patch('/user/:userID',userController.updateUser)

module.exports=router