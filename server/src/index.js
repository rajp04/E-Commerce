const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

const app = express()
const port = process.env.PORT || 3020
const database = require("./database/db.js")
const Userrouter = require('./routes/Routes.js')

dotenv.config()
app.use(cors())
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))

database()
app.use("/api/v1/users", Userrouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})