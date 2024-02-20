import mongoose from "mongoose"

// create a student schema using which we can insert and read the student data

let studentSchema = mongoose.Schema({

    name: String,
    stream : String,
    instrested: String,
    Score: Number,
    regular: Boolean,
    email: String,
    contact: String,
    address: String,
    EntryDate: String

})

let student = mongoose.model("students", studentSchema)

export { student }