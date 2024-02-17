import express from "express"

import {GetHome , PostHome } from "../controllers/controller.js"

let router = express()

router.get("/", GetHome)

router.post("/", PostHome)

export { router }