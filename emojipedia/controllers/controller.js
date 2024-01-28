let GetHome = (req,res) =>{
    res.status(200).render("index.ejs")
}

export {GetHome}