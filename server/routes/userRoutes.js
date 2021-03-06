const express = require("express")
const router = express.Router()
const { registerUser, getMe } = require("../controller/userController")
const loginUser = require("../controller/authController")
const { protect } = require("../middleware/authMiddleware")

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/me").get(protect, getMe)



module.exports = router