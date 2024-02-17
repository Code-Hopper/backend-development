import express from "express"
import ejs from "ejs"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import { router } from "./routers/router.js"


dotenv.config({path:"./config.env"})

let app = express()

let port = process.env.PORT

app.use(express.static("./public"))

app.set("view engine","ejs")

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

app.use(router)

app.listen(port,()=>{
    console.log(`Server is Live on port ${port} | http://localhost:${port}`)
})