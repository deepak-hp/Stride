const { validationResult } = require("express-validator");
const mapService = require("../services/maps.service");


module.exports.getCoordinates = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const {address} = req.query;
    try {
        const coordinates = await mapService.getAddressCoordinate(address)
        res.status(200).json(coordinates);
    } catch (error) {
        res.status(404).json({messge: "Coordinates not found", error: error.message})
    }
}

module.exports.getDistanceTime = async(req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const {origin, destination} = req.query;
    try{
        const distanceAndTime = await mapService.getDistanceTime(origin, destination);
        res.status(200).json(distanceAndTime)
    }catch(error){
        res.status(404).json({message: "Unable to find Distance and time", error: error.message})
    }
}

module.exports.getAutoCompleteSuggetions = async (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const {input} = req.query;

    try {
        const autocompleteSuggestions = await mapService.getAutoCompleteSuggetions(input);
        res.status(200).json(autocompleteSuggestions)
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
    }

}