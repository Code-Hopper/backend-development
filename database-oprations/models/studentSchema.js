import mongoose from "mongoose"

// create a student schema using which we can insert and read the student data

let studentSchema = mongoose.Schema({
    _id: Number,
    name: String,
    stream: String,
    instrested: String,
    score: Number,
    regular: Boolean,
    email: String,
    contact: String,
    address: String,
    EntryDate: String
})

studentSchema.pre("save", async function(next){

    let student = this

    console.log("pre method called !")

    // just set a new _id for every document that is going to be saved !
    // this._id =  

    console.log(student._id)

    if (!student._id) {
        try {
            const count = await mongoose.model("students").countDocuments();
            student._id = count + 1; // Assign a new ID based on current count of documents
            console.log(student._id)
        } catch (error) {
            console.error("Error generating ID:", error);
            return next(error);
        }
    }

    next()
})

let student = mongoose.model("students", studentSchema)

export { student }