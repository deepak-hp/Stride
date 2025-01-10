const rideModel = require("../models/ride.model");
const mapsService = require("./maps.service")
const crypto = require('crypto');

async function getFare(pickup, destination){
    if(!pickup || !destination){
        throw new Error("Pickup and destination are required")
    }
    const distanceAndTime = await mapsService.getDistanceTime(pickup,destination);

    const baseFare = {
        auto: 20,
        car: 40,
        motor: 15
    };

    const perKmRate = {
        auto: 10,
        car: 15,
        motor: 5
    };

    const perMinuteRate = {
        auto: 1,
        car: 2,
        motor: 0.5
    };

    const distance = (distanceAndTime.distance.value/ 1000)
    const time =  (distanceAndTime.duration.value/ 60)

    const fare = {
        auto: Number(baseFare.auto + (distance * perKmRate.auto) + (time * perMinuteRate.auto)).toFixed(2),
        car: Number(baseFare.car + (distance * perKmRate.car) + (time * perMinuteRate.car)).toFixed(2),
        motor: Number(baseFare.motor + (distance * perKmRate.motor) + (time * perMinuteRate.motor)).toFixed(2)
    };

    return fare;
}

module.exports.getFare = getFare

function getOtp(num){
    const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
    return otp;
}

module.exports.createRide = async({
    user,pickup, destination,vehicleType
}) => {
    if(!user || !pickup || !destination || !vehicleType){
        throw new Error("All fields are required")
    }

    const fare = await getFare(pickup, destination)

    const ride = rideModel.create({
        user,
        pickup,
        destination,
        opt: getOtp(6),
        fare: fare[vehicleType]
    })

    return ride
}


