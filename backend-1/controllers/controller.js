let GetHome = (req, res) => {
    res.status(200).sendFile("index.html")
}

let GetAbout = (req, res) => {
    res.status(200).sendFile("about.html")
}

let GetService = (req, res) => {
    res.status(200).send("Welcome to Service page")
}

let Get404 = (req, res) => {
    res.status(404).send("page not found 404 !")
}

export { GetHome , GetAbout , GetService , Get404}