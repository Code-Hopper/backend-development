import express from "express"

import { router } from "./router/router.js"

const app = express()

let port = 3021

// localhost:port  

app.use(router)

app.listen(port,()=>{
    console.log(`Server is Running On Port: ${port} !`)
})