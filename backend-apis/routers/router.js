import express from "express"
import { validateApiKey } from "../middlewares/validateApiKey.js"
import { GetHome , GetLanguages , GetCourseById , PostAddCourse ,DeleteCourse } from "../controllers/controller.js"

let router = express()

router.get("/", GetHome)

router.use("/:key",validateApiKey)
// this will be applied to all routes

// give acces to user if the key is code-hopper

// This route is for query pramas 
router.get('/:key/languages', GetLanguages)
// router.get('/:key/languages',validateApiKey , GetLanguages)
// this is for single route and has to be applied individual route

// this route is for path pramas
router.get('/:key/course/:courseId' , GetCourseById)

// this is api post route

router.post("/:key/addcourse",PostAddCourse)

// this is delete api route

router.delete("/:key/deletecourse/:deleteCourseId",DeleteCourse)


export { router }