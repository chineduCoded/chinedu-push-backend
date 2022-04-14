require("dotenv").config()
const express = require("express")
const cors = require("cors")
const userRoute = require("./routes/userRoutes")
const workRoute = require("./routes/workRoutes")
const {errorHandler} = require("./middleware/errorMiddleware")
const colors = require("colors") 
const connection = require("./database/dbConnection")

const app = express()

// db connection
connection()

// use middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))


// use Routes
app.get("/", (req, res) => {
    res.send("Welcome to Update My Portfolio API")
})
app.use("/api/works", workRoute)
app.use("/api/users", userRoute)

app.use(errorHandler)

const port = process.env.PORT || 5000

app.listen(port, () => {`Server running on port: ${port}`})
