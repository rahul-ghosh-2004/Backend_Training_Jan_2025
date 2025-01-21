import mongoose, { Schema } from "mongoose";

const bankSchema = new Schema({
    account_no: {
        type: Number,
        required: true,
        unique: true
    },
    account_holder: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    bank_name: {
        type: String,
        required: true
    },
    phone_no: {
        type: Number,
        required: true,
        unique: true
    },
    ifsc: {
        type: String,
        required: true
    },
    pan: {
        type: String
    },
    aadhaar: {
        type: Number,
        required: true
    }
})

const Bank = mongoose.model("Bank", bankSchema)

export default Bank