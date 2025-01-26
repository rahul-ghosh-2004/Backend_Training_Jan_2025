import mongoose from "mongoose"
import DBName from "../constant.js"

const connectDB = async () => {
    try {
        const response = await mongoose.connect(`${process.env.MONGODB_URI}/${DBName}`)
        console.log(`DB connected :: ${response.connection.host}/${DBName}`)
        // console.log(response)
    } catch(error) {
        console.log(error)
    }
}

export default connectDB
