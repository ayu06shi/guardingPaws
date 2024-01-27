const User = require('../models/userModel');

const { hashPassword, comparePassword } = require('../helper/authHelper');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
    try {
        const {name, email, password, address, role} = req.body;

        if(!name || !email || !password || !address)
        {
            return res.status(403).send({message: 'Provide complete details'})
        }

        const user = await User.findOne({ email });

        if(user) 
        {
            return res.status(400).send({
                success: false,
                message: "Email id already exists"});
        }

        const hashedPassword = await hashPassword(password);
        const userData = {name, email, password: hashedPassword, address, role};
        const newUser = await User.create(userData);
        const userToReturn = {...newUser.toJSON()};

        return res.status(200).send({
            success: true,
            message: 'User Register Successfully',
            userToReturn
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Registeration",
            error,
        });
    }
}

const loginController = async (req, res) => {
    try {
        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(403).send({
                success: false,
                message: 'Provide complete details'})
        }

        const user = await User.findOne({ email });

        if(!user) {
            return res.status(400).send({
                success: false,
                message: "Email is not registered"});
        }

        const isPasswordValid = await comparePassword(password, user.password);

        if(!isPasswordValid) {
            return res.status(403).send({
                success: false,
                message: "Invalid password"});
        }

        //token create
        const token = await jwt.sign({_id: user._id }, process.env.JWT_SECRET_KEY, {expiresIn: '7d'});

        const userToReturn = {...user.toJSON()};
        delete userToReturn.password;

        return res.status(200).send({
            success: true,
            message: "Login Successfully",
            userToReturn,
            token: token
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in login",
            error,
        });
    }
}

module.exports = {createUser, loginController}