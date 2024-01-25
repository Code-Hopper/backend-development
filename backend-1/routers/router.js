import express from "express"

import { GetHome , GetAbout , GetService , Get404  } from "../controllers/controller.js"

let router = express()

router.get("/", GetHome)

router.get("/service", GetService)

router.get("/about", GetAbout)

router.get("*", Get404)

export { router }