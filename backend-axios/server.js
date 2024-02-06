import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import axios from "axios"

dotenv.config({ path: "config.env" })

let port = process.env.PORT

let app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get("/", async (req, res) => {

    // this function is going to fetch all the random languages from backend-apis application

    try {
        let jeMilal = await axios.get("http://localhost:3000/languages")

        console.log(jeMilal.data)

        res.status(200).json({ "message": "this is home page !" , "whatWeGot" : jeMilal.data })

    } catch (error) {
        console.error(`Some error while fetching the data ${error}`)
        res.status(500).json({ "message": error.message , "status" : error.status })
    }
``
    // res.status(200).json({ "message": "this is home page !" })

})

app.get("/custom", async (req, res) => {

    // this function is going to fetch all the random languages from backend-apis application

    try {
        let customJeMilal = await axios.get(`http://localhost:3000/languages?level=hard`)
        // let customJeMilal = await axios.get(`http://localhost:3000/languages?level=${req.body.level}`)

        console.log(customJeMilal.data)

        res.status(200).json({ "message": "this is custom language page !" , "whatWeGot" : customJeMilal.data })

    } catch (error) {
        console.error(`Some error while fetching the data ${error}`)
        res.status(500).json({ "message": error.message , "status" : error.status })
    }
``
    // res.status(200).json({ "message": "this is home page !" })

})

app.get("/add", async (req, res) => {

    // this function is going to fetch all the random languages from backend-apis application

    try {
       
        let AddCustomJeMilal = await axios({
            method: 'post',
            url:'http://localhost:3000/addcourse',
            data:{
                id: 13, language: "MongoDB", duration: 6, level: "very easy"                
            }
        })

        console.log(AddCustomJeMilal.data.Add_message)

        res.status(201).json({ "message": "Successfull Added new element"})

    } catch (error) {
        console.error(`Some error while fetching the data add ${error}`)
        res.status(501).json({ "message": error.message , "status" : error.status })
    }
``
    // res.status(200).json({ "message": "this is home page !" })

})

app.listen(port, () => {
    console.log(`Server is running on port ${port} | http://localhost:${port}`)
})