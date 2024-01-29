import express from "express"
import { GetHome , PostHome } from "../controllers/controller.js"

let router = express()

// For Display Emojies Page
router.get("/", GetHome)
router.post("/",PostHome)
// For Display Emojies Page


export { router }