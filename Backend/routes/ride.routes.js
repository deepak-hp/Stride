const express = require("express")
const router = express.Router();
const {body, query} = require("express-validator")
const rideController = require("../controllers/ride.conntroller")
const AuthMiddleware = require("../middlewares/auth.middleware")

router.post("/create", AuthMiddleware.authUser,
    body("pickup").isString().isLength({min: 3}).withMessage("Invalid pickup address"),
    body("destination").isString().isLength({min: 3}).withMessage("Invalid destination addres"),
    body("vehicleType").isString().isIn(['auto','car','motor']).withMessage("Invalid vehicle type"),
    rideController.createRide
)

router.get("/get-fare",AuthMiddleware.authUser, 
    query("pickup").isString().isLength({min: 3}).withMessage("Invalid pickup address"),
    query("destination").isString().isLength({min: 3}).withMessage("Invalid destination addres"),
    rideController.getFair)


module.exports = router;