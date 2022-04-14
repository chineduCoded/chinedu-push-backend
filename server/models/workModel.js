const mongoose = require("mongoose")
const Joi = require("joi")

const workSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: {
        type: String,
        required: [true, 'Please add name of project']
    },
    description: {
        type: String,
        required: [true, 'Please add description']
    },
    tags: {
        type: Array,
        required: true
    },
    demo: {
        type: String,
        required: [true, 'Please add demo url link'],
        unique: true
    },
    github: {
        type: String,
        required: [true, 'Please add github url link'],
        unique: true
    }
}, {
    timestamps: true
})

const Work = mongoose.model("work", workSchema)

const validate = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        tags: Joi.array().required(),
        demo: Joi.string().required(),
        github: Joi.string().required()
    })
    return schema.validate(data)
}

module.exports = {
    Work,
    validate
}