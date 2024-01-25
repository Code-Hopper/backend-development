// dependencies
import express from "express"
import dotenv from "dotenv"

// configure .env file
dotenv.config({ path: './config.env'})

// middlewares 
import { router } from "./routers/router.js"

const app = express()

let port = process.env.PORT || 3020

// localhost:port  

app.use(express.static("public"))

app.use(router)

app.listen(port,()=>{
    console.log(`Server is Running : http://localhost:${port} !`)
})