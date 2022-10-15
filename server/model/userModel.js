const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type: String ,
        require : true,
        max:20,
        min:3,
        unique : true,

    }, 
    email:{
        type : string,
        require: true,
        unique: true,
        max:50

    }
})