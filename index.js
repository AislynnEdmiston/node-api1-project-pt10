// implement your API here
const express = require("express");

const server = express()

server.use(express.json())


server.listen(5000, () => {
    console.log("Server is running at http://localhost:5000")
})