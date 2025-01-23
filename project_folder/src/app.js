import express from "express"

const app = express()

app.use(express.json())

import userRoute from "./routes/user.route.js"

app.use("/api/v1/user", userRoute)

// http://localhost:3000/api/v1/user

export default app