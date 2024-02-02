import express from "express"

import { GetHome , GetLanguages } from "../controllers/controller.js"

let router = express()

router.get("/", GetHome)

router.get('/languages', GetLanguages)

export { router }