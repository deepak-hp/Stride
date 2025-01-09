const mongoose = require("mongoose")


const rideSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    captain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Captain",
    },
    pickup: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    fare: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        emum: ['pending', 'accepted', "ongoing", 'completed', 'cancelled'],
        default: "pending"
    },
    durarion: { // in seconds
        type: Number,
    },
    distance: { // in meters
        type: Number,
    },
    paymentId: {
        type: Number,
    },
    orderId: {
        type: String
    },
    signature: {
        type: String
    },
    opt: {
        type:String,
        select: false,
        required: true
    }
})


module.exports = mongoose.model("ride", rideSchema)