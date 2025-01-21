// HandleResponse is a structure using which you will send response to the client side.
// statusCode ---> 200, 400, 500, 300
// 200 ---> There is no error! Aapne ek response ko get kiya hai.
// 400, 404, 401 ---> Client Side Error.
// 500 ----> Server Side Pe Koi Problem Hai.

class HandleResponse {
    constructor(
        statusCode = 200,
        data = {},
        message = "Success!"
    ){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = true
    }
}

export default HandleResponse