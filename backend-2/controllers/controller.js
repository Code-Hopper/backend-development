let GetHome = (req,res) =>{
    res.status(200).sendFile("index.html")
}

let GetAbout = (req,res) =>{
    res.status(200).send("welcome to About page")
}

let GetContact = (req,res) =>{
    res.status(200).send("welcome to Contact page")
}

let GetService = (req,res) =>{
    res.status(200).send("welcome to Service page")
}

export { GetHome , GetAbout , GetService , GetContact }