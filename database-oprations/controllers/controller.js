import "../Database/conn.js"

// importing models

import { student } from "../models/studentSchema.js"


let GetHome = (req, res) => {
    res.status(200).render("index", { data: "" , message: "" })
}

let PostHome = (req, res) => {
    console.log("post route triggred !")

    // get the data from form at index.ejs page


    // assigning the key of req.body to single variables

    console.log(req.body)

    let { name, stream, instrested, score, regular, email, contact, address } = req.body

    if (!name || !stream || !instrested || !score || !email || !contact || !address) {

        if(!stream){
            console.log("Invalid Data ! please fill the form completly.")
            res.status(400).render("index",{ message: "Invalid Data ! please fill the form completly. stream can't be empty " , data: "" })
        }else{
            console.log("Invalid Data ! please fill the form completly.")
            res.status(400).render("index",{ message: "Invalid Data ! please fill the form completly." , data: "" })
        }

    
    } else {

        // we can valdate data for each fileds
        regular = Boolean(regular)

        // after successfully completing all the process just make an redirect call
        res.status(201).redirect("/")
    }

}

export { GetHome, PostHome } 