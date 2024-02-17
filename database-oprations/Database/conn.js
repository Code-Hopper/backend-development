import mongoose from "mongoose"

import dotenv from "dotenv"

dotenv.config({ path: "./config.env" })

let connection_string = process.env.MONGODBSTRING

// mongodb://locahost:27017/database_name

// console.log(connection_string)

let conn = async () => {

    try {

        await mongoose.connect(connection_string)

        console.log("Connection To MongoDB was Successfull !")

    } catch (error) {
        console.error(`Connection was failed : ${error}`)
    }

}

conn()