const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()
const app = express()
const port = process.env.PORT || 3020
const database = require("./database/db.js")
const userRouter = require('./routes/userRoutes.js')
const adminRouter = require("./routes/adminRoutes.js")
const productRouter = require("./routes/productRoutes.js")
const cartRouter = require("./routes/cartRoutes.js")
const orderRouter = require("./routes/orderRoutes.js")

app.use(cors())
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use("/public/temp", express.static("public/temp"))

database()
app.use("/api/v1/users", userRouter)
app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/product", productRouter)
app.use("/api/v1/cart", cartRouter)
app.use("/api/v1/order", orderRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})