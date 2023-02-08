import express from "express"
import { authUser, getUserProfile, registerUser } from "../controller/userController.js"
import { protect } from "../middlewares/authmiddleware.js"


const router = express.Router()

router.post('/login',authUser)
router.post('/register',registerUser)
router.route("/loaduser").get(protect,getUserProfile)
export default router