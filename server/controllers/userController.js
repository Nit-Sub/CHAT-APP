const User = require("../model/userModel")
const brcypt = require("bcrypt");


module.exports.register = async (req, res, nect) => {
    try {
        const { username, password, email } = req.body;
        const usernameCheck = await User.findOne({ username });
        if (usernameCheck) {
            return res.json({
                msg: "Username already used",
                status: false
            });

        }
        const emailCheck = await User.findOne({ email });
        if (emailCheck) {
            return res.json({
                msg: "Email already used",
                status: false
            })
        }
        const hashedPassword = await brcypt.hash(password, 10);
        const user = await User.create({
            email,
            username,
            password: hashedPassword,
        });
        delete user.password;
        return res.json({
            status: true, user
        });
    }
    catch (error) {
        next(error);

    }
}


module.exports.login = async (req, res, nect) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.json({
                msg: "Incorrect Username ",
                status: false
            });
        }
        const isPasswordValid = await brcypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.json({
                msg: "Incorrect Password",
                status: false
            })
        }
        delete user.password;
        return res.json({
            status: true, user
        });
    }
    catch (error) {
        next(error);
    }
}

module.exports.setAvatar = async (req, res, nect) => {
    
    try {
        const userId= req.params.id;
        const avatarImage = req.body.image;
        const userData = await User.findByIdAndUpdate(userId ,{
            isAvatarImageSet : true, 
            avatarImage,


        });
        return res.json({
            isSet : userData.isAvatarImageSet,
            image: userData.avatarImage,
        });

    }
    catch(error){
        next(error);
    }
}

