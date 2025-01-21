// MongoDB --> Database
// Mongoose --> ODM ---> Bridge between server & MongoDB Database
// Schema ---> is the blueprint of the Database / table (SQL)

import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        minLength: 10,
        maxLength: 10
    },
    email: {
        type: String,
        lowercase: true
    }
}, { timestamps: true })
// timestamps --> { createdAt: "", updatedAt: "" }

const User = mongoose.model("User", userSchema)

export default User