const mongoose = require("mongoose")
const Joi = require("joi")
const passwordComplexity = require("joi-password-complexity")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required!"],
    },
    email: {
        type: String,
        required: [true, "Email is required!"]
    },
    password: {
        type: String,
        required: [true, "Password is required!"]
    }
}, {
    timestamps: true
})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWT_PRIVATE_KEY, {expiresIn: "7d"})
    return token
}

const User = mongoose.model("user", userSchema)

const validate = (data) => {
    const schema = Joi.object({
        username: Joi.string().required().label("Username"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password")
    })
    return schema.validate(data)
}


module.exports = {User, validate}