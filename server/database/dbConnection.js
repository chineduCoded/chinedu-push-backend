const mongoose = require("mongoose")



module.exports = () => {
    connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    try {
        mongoose.connect(process.env.MONGO_URI, connectionParams)
        console.log('DB connected successfully'.cyan)
    } catch (error) {
        console.log(`Error ${error.message}`)
        process.exit(1)
    }
}