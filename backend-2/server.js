import express from "express"

import dotenv from "dotenv"

import ejs from "ejs"

// config code for env file than contents a PORT

dotenv.config({ path: "./config.env" })

import { router } from "./routers/router.js"

let port = process.env.PORT || 5012

let app = express()

app.use(express.static("./public"))

app.set("view engine","ejs")

app.use(router)

app.listen(port, () => {
    console.log(`The Server is running on port : ${port} | visit page http://localhost:${port}`)
}) 