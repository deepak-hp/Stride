const blacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model")
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator")

module.exports.registerCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { fullname, email, password, vehicle } = req.body;

    const isExisting = await captainModel.findOne({email});

    if(isExisting){
        return res.status(400).json({message: "captain already exist"})
    }

    const hashPassword = await captainModel.hashPassword(password, 10);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    })

    const token = captain.generateAuthToken();

    res.status(201).json({token, captain})
}

module.exports.loginCaptain = async(req,res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {email,password} = req.body;
    
    const captain = await captainModel.findOne({email}).select("+password")

    if(!captain){
        return res.status(401).json({message: "Invalid email or password"});
    }


    const isMatch = await captain.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message: "Invalid email or password"});
    }

    const token = captain.generateAuthToken();

    // res.cookie('token',token, {
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV === 'production',
    //     maxAge: 3600000
    // })

    res.status(200).json({token, captain});
}

module.exports.getCaptainProfile = async(req,res) => {
    res.status(200).json({captain: req.captain})
}

module.exports.logoutCaptain = async(req,res) => {
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    if(!token){
        return res.status(400).json({message: "Invalid token"})
    }
    await blacklistTokenModel.create({token})
    res.clearCookie("token")
    res.status(200).json({message: "Logout Successful"})
}