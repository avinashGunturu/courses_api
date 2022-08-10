const mongoose=require("mongoose")


const course =mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    image_url:{
        type:String,
        require:true
    },
    university_name:{
        type:String,
        require:true
    },
    faculty_profile:{
        type:String,
        require:true
    },
    learning_hours:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    certificate:{
        type:String,
        require:true
    },
    eligibility_criteria:{
        type:String,
        require:true
    },
})


module.exports=mongoose.model("courses",course)