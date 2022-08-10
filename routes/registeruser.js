const express=require("express")
const registerUser = require("../models/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const router = express.Router()


router.post("/signUp",async (req,res)=>{

    try{
        const {user_name,password,confirm_password,email,phone_number}= req.body
        
        const exist = await registerUser.findOne({email})
        if(exist){
            return res.status(400).send('user Already Exist')
        }
        if(password != confirm_password){
            return res.status(400).send('password not matching')
        }
        let hashpassword=await bcrypt(password,10)
       let newUser = new registerUser({
        user_name,
        password:hashpassword,
        confirm_password,
        email,
        phone_number
       })
       await newUser.save()
       res.status(200).send('register successfully')
    }catch(err){
   return res.json(err)
    }   
})


router.post('/login',async (req,res)=>{

    try{
        const {password,email}= req.body
      let exist = await registerUser.findOne({email})

      if(!exist){
        return res.satsus(400).send('user not found')
      }
      if(exist.password !== password){
        return res.status(400).send('invalid cradentials')  
      }

      let payload= {
        user:{
            id:exist.id,
            email:exist.email
        }
      }


      jwt.sign(payload,"ilovetocode",{expiresIn:3600000},(err,token)=>{
        if(err) throw err
        return res.json({token})
      })




    }catch(err){
        return res.status(500).send("server Error")
    }
})

module.exports = router;