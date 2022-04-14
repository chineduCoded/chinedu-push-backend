const express = require("express")
const router = express.Router()
const { getWorks, setWork, updateWork, deleteWork } = require("../controller/workController")
const { protect } = require("../middleware/authMiddleware")

router.route("/").get(protect, getWorks).post(protect, setWork)
router.route("/:id").put(protect, updateWork).delete(protect, deleteWork)


module.exports = router