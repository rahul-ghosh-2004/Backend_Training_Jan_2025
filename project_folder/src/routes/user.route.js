import { Router } from "express"
import { register } from "../controllers/user.controller.js"

const router = Router()

router.route("/register").post(register)
// http://localhost:3000/api/v1/user/register

export default router