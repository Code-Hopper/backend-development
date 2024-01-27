import express from "express"

import { GetHome , GetAbout , GetService , GetContact } from "../controllers/controller.js"

let router = express()

router.get("/",GetHome)

router.get("/about",GetAbout)

router.get("/contact",GetContact)

router.get("/service",GetService)

export { router }