import "../Database/conn.js"

let GetHome = (req,res) =>{
    res.status(200).render("index",{ data:"" })
}

let PostHome = (req,res) =>{
    console.log("post route triggred !")

    // get the data from form at index.ejs page

    console.log(req.body)

    res.status(201).redirect("/")
}

export {  GetHome , PostHome } 