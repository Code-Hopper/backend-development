import { ConnectionPoolClosedEvent } from "mongodb";
import "../Database/conn.js"

// importing models

import { student } from "../models/studentSchema.js"


let GetHome = async (req, res) => {

    console.log(req.query)

    console.log(req.cookies)

    // searching student using their names 

    if (!req.query.searchName && !req.query.sort) {
        // fetch the data form database only
        let data;
        try {
            data = await student.find() // unfiltred data
            // console.log(data) // display the data from database
        } catch (error) {
            console.log("Error while fetching the data " + error)
        }
        res.status(200).render("index", { data: data || "", message: "" })
    } else {
        let data;
        try {

            if (!req.query.searchName && req.query.sort) {

                let sortWhat = Number(req.query.sort)

                console.log(sortWhat)

                data = await student.find().sort({ score: sortWhat }) // unfiltred data
            } else {

                data = await student.find({ name: req.query.searchName }) // unfiltred data
                // console.log(data) // display the data from database
            } 
        } catch (error) {
            console.log("Error while fetching the data " + error)
        }

        res.status(200).render("index", { data: data || "", message: "" })
    }



}

let PostHome = async (req, res) => {
    console.log("post route triggred !")

    // get the data from form at index.ejs page


    // assigning the key of req.body to single variables

    console.log(req.body)

    let { name, stream, instrested, score, regular, email, contact, address } = req.body

    if (!name || !stream || !instrested || !score || !email || !contact || !address) {

        if (!stream) {
            console.log("Invalid Data ! please fill the form completly.")
            res.status(400).render("index", { message: "Invalid Data ! please fill the form completly. stream can't be empty ", data: "" })
        } else {
            console.log("Invalid Data ! please fill the form completly.")
            res.status(400).render("index", { message: "Invalid Data ! please fill the form completly.", data: "" })
        }


    } else {

        // we can valdate data for each fileds
        regular = Boolean(regular)

        let date = new Date()

        let EntryDate = date.toDateString()

        try {

            let entry = new student({ name, stream, instrested, score, regular, email, contact, address, EntryDate })

            let result = await entry.save()

            console.log("This is Result " + result)

        } catch (error) {
            console.error("Some Error While Save " + error)
        }


        // after successfully completing all the process just make an redirect call
        res.status(201).redirect("/")
    }

}

let DeleteData = async (req, res) => {

    console.log(req.params)

    let deleteID = req.params.deleteId

    console.log(deleteID)

    // delete the document from database
    // deleteID = Number(deleteID)

    try {

        let result = await student.deleteOne({ _id: deleteID })

        console.log(result)

        res.status(200).redirect("/")

    } catch (error) {
        console.log("Error while deleting " + error)
        res.status(500).redirect("/")
    }

}

export { GetHome, PostHome, DeleteData } 