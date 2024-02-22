import express from "express"

import {GetHome , PostHome , DeleteData } from "../controllers/controller.js"

let router = express()

router.get("/", GetHome)

router.post("/", PostHome)

router.get("/delete/:deleteId", DeleteData)

export { router } 