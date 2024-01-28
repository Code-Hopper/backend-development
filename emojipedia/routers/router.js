import express from "express"
import { GetHome } from "../controllers/controller.js"

let router = express()

router.get("/", GetHome)

export { router }