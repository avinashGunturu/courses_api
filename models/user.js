const mongoose=require("mongoose")


const registerUser =mongoose.Schema({
    user_name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }, confirm_password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone_number:{
        type:String,
        require:true
    }
})


module.exports=mongoose.model("registerUser",registerUser)