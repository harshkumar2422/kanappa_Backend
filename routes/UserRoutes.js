import express from "express"
import { getallUser, login, logout, registration } from "../controllers/userControllers.js"
import { authorizadmin, isAuthenticated } from "../middlewares/auth.js"

const router = express.Router()


router.route("/register").post(registration)
router.route("/signin").post(login )
router.route("/logout").get(logout)
router.route("/Users").get(isAuthenticated,authorizadmin,getallUser)





export default router