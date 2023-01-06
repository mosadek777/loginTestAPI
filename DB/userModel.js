const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
       userName:{
        type:String,
        
        unique:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },  
    password:{
        type:String,
        required:true
    }
    },
    
    {
        timestamps:true

    })




const userModel = mongoose.model(`user`,userSchema)
module.exports = userModel