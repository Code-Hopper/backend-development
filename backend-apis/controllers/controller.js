import e from "express"

let data = [

    { id: 1, language: "c", duration: 1, level: "hard" },
    { id: 2, language: "C++", duration: 1.5, level: "hard" },
    { id: 3, language: "JavaScript", duration: 2 , level: "easy" },
    { id: 4, language: "Ejs", duration: 1 , level: "hard" },
    { id: 5, language: "node.js", duration: 0, level: "hard" },
    { id: 6, language: "express", duration: 1, level: "very hard" },
    { id: 7, language: "HTML", duration: 3, level: "very easy" },
    { id: 8, language: "CSS", duration: 2.5, level: "Medium Hard" },
    { id: 9, language: "Bootstrap", duration: 2, level: "easy" },
    { id: 10, language: "React", duration: 1000, level: "Exterm Hard" },

]


let GetHome = (req, res) => {
    res.status(200).json({ "message": "hello and welcome !" })
}

let GetLanguages = (req, res) => {

    if (req.query.level) {
        // filter the result

        let levelType = req.query.level

        let newData = data.filter((element) => {
            return element.level == levelType
        })

        res.status(200).json(newData)

    } else if (req.query.duration) {
        // filter the result

        let durationType = req.query.duration

        let newData = data.filter((element) => {

            // clear and slipt the number from duration

            return element.duration <= durationType
        })

        res.status(200).json(newData)

    }
    else {
        // return the random course

        let randomID = Math.round(Math.random() * 9 + 1)

        console.log(randomID)


        let randomElemenet;

        data.filter((element) => {
            if (element.id == randomID) {
                randomElemenet = element
            }
        })

        console.log(randomElemenet)

        res.status(200).json(randomElemenet)

    }

}

let GetCourseById = (req, res) => {

    let course = req.params.courseId

    let courseData;

    data.filter((element) => {
        if (element.id == course) {
            courseData = element
        }
    })

    if (courseData) {
        res.status(200).json(courseData)
    } else {
        res.status(404).json({ "Message": "Searched Course not found !" })
    }

}

let PostAddCourse = (req,res) =>{
    console.log(req.body)

    let newCourse = { ...req.body, id: data[data.length - 1].id + 1 }

    data.push(newCourse)

    res.status(201).json({"message":"Successfully Added Course !"})
}

let DeleteCourse = (req,res) =>{
    let whatToDelete = req.params.deleteCourseId

    data = data.filter((element)=>{
        return element.id != whatToDelete
    })

    res.status(200).json({"message":"Successfully Delete Course !"})

}

export { GetHome, GetLanguages, GetCourseById , PostAddCourse , DeleteCourse }