import app from "./app.js";
import connectDB from "./database/db.connect.js";
import dotenv from "dotenv"

dotenv.config()


connectDB()
.then(() => {
    app.listen(3000, () => {
        console.log(`Server is running!`)
    })
})
.catch((error) => {
    console.log(error)
})