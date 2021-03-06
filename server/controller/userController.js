const { User, validate } = require("../models/userModel")
const bcrypt = require("bcrypt")

const registerUser = async (req, res) => {
    try {
        const { error } = validate(req.body)
        if (error)
            return res.status(400).send({message: error.details[0].message})
        const user = await User.findOne({username: req.body.username})

        if (user) 
            return res.status(409).send({message: `User with given ${req.body.username} already exist!`})
        const salt = await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword = await bcrypt.hash(req.body.password, salt)

        await new User({...req.body, password: hashPassword}).save()
        res.status(201).send({message: "User created successfully"})
    } catch (error) {
        res.status(500).send({message: "Internal Server Error"})
    }
}

const getMe = async (req, res) => {
    try {
        const {_id, username, email } = await User.findById(req.user.id)

        res.status(200).json({
            id:_id,
            username,
            email
        })
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}




module.exports = {
    registerUser,
    getMe
}

