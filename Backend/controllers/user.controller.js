const userModel = require("../models/user.model")
const userService = require("../services/user.service")
const { validationResult } = require("express-validator")

module.exports.registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { fullname, email, password } = req.body;

        const hashPassword = await userModel.hashPassword(password)

        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashPassword
        })

        const token = user.generateAuthToken(user._id);

        res.status(201).json({ token, user });

    } catch (error) {
        res.status(500).json({ errors: error.message })
    }
}

module.exports.loginUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { email, password } = req.body;

        const user = await userModel.findOne({ email }).select("+password");

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" })
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" })
        }

        const token = user.generateAuthToken();

        return res.status(200).json({ token, user })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports.profile = async(req,res,next) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }

        const {email} = req.body;

        const user = await userModel.findOne({email});

        if(!user){
            return res.status(401).json({message: "Invalid user"})
        }

        return res.status(200).json({user})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}