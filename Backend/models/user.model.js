const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "First name must be atleast 3 characters long"]
        },
        lastname: {
            type: String,
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, "Email must be at leaset 5 characters long"]
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String,
    }
})

userSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id: this.id}, process.env.JWT_SECRET)
    return token
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10)
}


module.exports = mongoose.model("user", userSchema)