const User = require("../model/userModel")
const brcypt = require("bcrypt");


module.exports.register = async (req, res, nect) => {
    try{
        const { username, password, email } = req.body;
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck) {
        return res.json({ 
            msg: "Username already used",
             status: false });

    }
    const emailCheck = await User.findOne({email});
    if(emailCheck){
        return res.json({
            msg:"Email already used",
             status : false
        })
    }
    const hashPassword = await brcypt.hash(passwword, 10);
    const user= await User.create({
        email,
        username,
        password: hashedPassword,
    });
    delete user.password;
    return res.json({
        status: true , user
    });
    }
    catch(error){
        next(error)

    }



}