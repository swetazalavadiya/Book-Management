const express=require('express')
const bodyparser=require('body-parser')
const route=require('./routes/route')
const mongoose=require('mongoose')
const app=express()
const multer = require("multer")

app.use(bodyparser.json())
app.use(multer().any())

mongoose.connect("mongodb+srv://123:1234@cluster0.pf4v08v.mongodb.net/project-3",{
    useNewUrlparser:true
})
.then(()=>console.log("MongoDb is connected with project-3"))
.catch((error)=>console.log(error))

app.use("/", route)

app.listen(process.env.PORT || 3000, function(){
    console.log("Express app running on port "+ (process.env.PORT || 3000))
})
