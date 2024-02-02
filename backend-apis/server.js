import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"

dotenv.config({ path: "./config.env" })

let app = express()

// modules imports
import { router } from "./routers/router.js"

let port = process.env.PORT

// parse application/json
app.use(bodyParser.json())

app.use(router)

app.listen(port, () => {
    console.log(`Server is running on port ${port} | http://localhost:${port} `)
})