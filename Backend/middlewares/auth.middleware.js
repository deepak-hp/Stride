const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" })
        }

        const isBlacklistedToken = await blacklistTokenModel.findOne({ token })
        if (isBlacklistedToken) {
            return res.status(401).json({ message: "Unauthorized" })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findById(decoded._id);

        if (!user) {
            return res.status(401).json({ message: "Unauthorized" })
        }

        req.user = user
        return next();
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}