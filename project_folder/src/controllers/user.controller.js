import HandleError from "../utils/HandleError.js";
import HandleResponse from "../utils/HandleResponse.js";
import User from "../models/user.model.js";

const register = async (req, res) => {
    // req object --> req.body
    // req.file / req.files ---> We can grab file/files like image, video, etc from req.file/files

    const { name, phone, email } = req.body

    if (!name || !phone || !email) {
        return res
            .status(400)
            .json(
                new HandleError(400, "All fields are required!")
            )
    }

    if (name?.trim() === "") {
        return res
            .status(400)
            .json(
                new HandleError(400, "Name shouldn't be empty!")
            )
    }

    if (phone?.trim()?.length !== 10) {
        return res
            .status(400)
            .json(
                new HandleError(400, "Invalid mobile number!")
            )
    }

    if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email?.trim())) {
        return res
            .status(400)
            .json(
                new HandleError(400, "Provided E-Mail id is invalid!")
        )
    }

    const isExistedUser = await User.findOne({
        $or: [
            {
                email: email?.trim()
            }, 
            {
                phone: phone?.trim()
            }
        ]
    })

    if (isExistedUser) {
        return res
        .status(400)
        .json(
            new HandleError(400, "Existed user! Please go for login!")
        )
    }

    const user = await User.create({
        name: name?.trim(),
        phone: Number(phone?.trim()),
        email: email?.trim()?.toLowerCase()
    })

    const createdUser = await User.findById(user._id)

    if (!createdUser) {
        return res
        .status(500)
        .json(
            new HandleError(500, "Something went wrong!")
        )
    }

    return res
    .status(201)  // 201 --> Kuch create kiya hai
    .json(
        new HandleResponse(200, createdUser, "User profile created successfully!")
    )
}



export {
    register
}