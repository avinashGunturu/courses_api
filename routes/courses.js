const express=require("express")
const { castObject } = require("../models/course")
const course = require("../models/course")
const checkAuth = require("../middleware/check-auth")

const router = express.Router()

// creating the routes


// getting all the courses
router.get("/",checkAuth,async (req,res)=>{
  try{
    const courses= await course.find()
    res.json(courses)
  }catch(err){
   res.json(err)
  }
  
  
})


// getting a single course

router.get("/:courseId",checkAuth,async (req,res)=>{


  const courseId = req.params.courseId
  try{
   const c= await course.findById(courseId)
    res.json(c)
  }catch(err){
   res.json(err)
  }
})


// creating a course
router.post("/",checkAuth,async (req,res)=>{
  const c= await course.create(req.body)
  res.json(c);
})



//updating course

router.put("/:courseId",checkAuth,async (req,res)=>{
  const c= req.params.courseId
  try{
   const updatecourse= await  course.updateOne({
            "_id":c
    },req.body)

    res.json(updatecourse)
  }catch(err){
    res.json(err)
  }
})




//deleting course

router.delete("/:courseId",checkAuth,async (req,res)=>{

  
  try{
   await course.remove({"_id":req.params.courseId})
   res.status(200).json({
    message:"done"
   })
  }catch(err){
      res.json(err)
  }
})






module.exports = router;