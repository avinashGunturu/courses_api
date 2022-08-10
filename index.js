
const express = require("express")
const coursesRouter = require("./routes/courses")
const registerUserRouter = require("./routes/registeruser")

const bodyParser = require('body-parser')

require("dotenv").config() 
 const mongoose = require("mongoose")
const app=express()


app.use(bodyParser.json())
app.use("/api/courses",coursesRouter)
app.use("/user",registerUserRouter)




mongoose.connect(process.env.DB_CONNECTION_URL,()=>{
    console.log("connected to db")
})








app.listen(process.env.PORT,()=>{
    console.log("server is running")
})