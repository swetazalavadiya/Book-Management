const mongoose=require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId

const Schema= new mongoose.Schema({
    bookId:{
        type:ObjectId,
        ref:'Bookmodel',
        required:true
    },
    reviewedby:{
        type:String,
        default:"guest"
    },
    reviewedAt:{
        type:Date,
        required:true
    },
    ratings:{
        type:Number,
        required:true
    },
    review:String,
    isDeleted:{
        type:Boolean,
        default:false
    },
    

},{timestamp:true})

module.exports= mongoose.model('reviewData', Schema)