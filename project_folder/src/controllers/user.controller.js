import HandleError from "../utils/HandleError.js";
import HandleResponse from "../utils/HandleResponse.js";


// login api
// login api url ---> http://localhost:3000/api/v1/user/login
const login = async (req, res) => {
    const DBData = {
        username: "user123",
        password: "1234"
    }

    const { username, password } = req.body  // body object ---> text data ka access milta hai

    if (username !== DBData.username) {
        return res
        .status(400)
        .json(
            new HandleError(404, "Invalid username!")
        )
    }

    if (password !== DBData.password) {
        return res
        .status(400)
        .json(
            new HandleError(404, "Invalid password!")
        )
    }

    return res
    .status(200)
    .json(
        new HandleResponse(200, { message: "Valid credentials!" }, "Login successful!")
    )

    // We will take some inputs from user (username, password)
    // check them 
}

export {
    login
}