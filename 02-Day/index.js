import express from "express"

const app = express()

const port = 5000

app.get("/", (req, res) => {
    res.statusCode = 200
    res.json({
        "name": "Back-End",
        "duration": "1.5 hrs"
    })
})

app.get("/login", function(req, res){
    res.statusCode = 200
    res.send("Welcome to the login page!")
})

app.listen(port, function(){
    console.log("Server is started!")
})

// get --> getting data
// post --> Sending data
// delete --> Deleting data
// patch, put --> Updating data