import express  from "express";
import dotenv from "dotenv"
import ejs from "ejs"
import { router } from "./routers/router.js";

dotenv.config({path:"./config.env"})

let app = express()

let port = process.env.PORT || 3013

app.use(express.static("./public"))

app.set("view engine","ejs")

app.use(router)

app.listen(port,()=>{
    console.log(`Server is running on port ${port} | http://localhost:${port}`)
})