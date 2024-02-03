import express from "express"

import { GetHome , GetLanguages , GetCourseById , PostAddCourse ,DeleteCourse } from "../controllers/controller.js"

let router = express()

router.get("/", GetHome)

// This route is for query pramas 
router.get('/languages', GetLanguages)

// this route is for path pramas
router.get('/course/:courseId' , GetCourseById)

// this is api post route

router.post("/addcourse",PostAddCourse)

// this is delete api route

router.delete("/deletecourse/:deleteCourseId",DeleteCourse)

export { router }