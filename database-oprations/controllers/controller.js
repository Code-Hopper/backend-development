let GetHome = (req,res) =>{
    res.status(200).render("index")
}

let PostHome = (req,res) =>{
    res.status(201).redirect("index")
}

export {  GetHome , PostHome } 