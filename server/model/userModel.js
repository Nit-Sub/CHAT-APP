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
        type : String,
        require: true,
        unique: true,
        max:50

    },
    password:{
        type: String,
        require: true,
        min : 8 
    },
    isAvatarImageSet:{
        type :Boolean,
        default: false
    },
    avatarImage :{
        type : String,
        default: ""
    }
});

module.exports = mongoose.model("Users", userSchema);