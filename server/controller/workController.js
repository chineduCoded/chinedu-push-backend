const { Work, validate } = require("../models/workModel")
const { User } = require("../models/userModel")

// @deesc get goals
// @route GET /api/works
// access Private
const getWorks = async (req, res) => {
    try {
        const works = await Work.find({ user: req.user.id })
        res.status(201).json(works)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

// @deesc set goal
// @route POST /api/works
// access Private
const setWork = async (req, res) => {
    const { name, description, tags, demo, github } = req.body
    try {
        if(!req.body) {
            res.status(400)
            throw new Error("Please add the fields")
        }
        const { error } = validate(req.body)
    
        if(error)
            return res.status(400).json({message: error.details[0].message})

        const newWork = await new Work({
            name, description, tags, demo, github, user: req.user.id
        }).save()
        res.status(201).json(newWork)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

// @deesc update goal
// @route PUT /api/works/:id
// access Private
const updateWork = async (req, res) => {
    try {
        const work = await Work.findById(req.params.id)
        if(!work) {
            res.status(404)
            throw new Error("Work not found")
        }

        const user = await User.findById(req.user.id)

        // Chheck for user
        if(!user) {
            res.status(401)
            throw new Error("User not found")
        }

        // Make  sure the logged in user  matches work user
        if(work.user.toString() !== user.id) {
            res.status(401)
            throw new Error("User not authorized")
        }

        const updatedWork = await Work.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(201).json(updatedWork)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

// @deesc delete goal
// @route DELETE /api/works/:id
// access Private
const deleteWork = async (req, res) => {
    try {
        const work = await Work.findById(req.params.id)
        if(!work){
            res.status(404)
            throw new Error("Work not found")
        }

        const user = await User.findById(req.user.id)

        // Chheck for user
        if(!user) {
            res.status(401)
            throw new Error("User not found")
        }

        // Make  sure the logged in user  matches work user
        if(work.user.toString() !== user.id) {
            res.status(401)
            throw new Error("User not authorized")
        }

        await Work.findByIdAndRemove(req.params.id)
        res.status(201).json({id: req.params.id, message: "Deleted successfully"})
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

module.exports = {
    getWorks,
    setWork,
    updateWork,
    deleteWork
}