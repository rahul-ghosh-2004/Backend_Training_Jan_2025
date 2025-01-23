// route --> end point --> /login, /logout, /profile
import { Router } from "express"
import { login } from "../controllers/user.controller.js"

const router = Router()

router.route("/login").post(login)

// http://localhost:3000/api/v1/user/login

export default router