const express = require("express")
const router = express.Router();
const {body} = require("express-validator")
const rideController = require("../controllers/ride.conntroller")
const AuthMiddleware = require("../middlewares/auth.middleware")

router.post("/create", AuthMiddleware.authUser,
    body("pickup").isString().isLength({min: 3}).withMessage("Invalid pickup address"),
    body("destination").isString().isLength({min: 3}).withMessage("Invalid destination addres"),
    body("vehicleType").isString().isIn(['auto','car','motorcycle']).withMessage("Invalid vehicle type"),
    rideController.createRide
)


module.exports = router;