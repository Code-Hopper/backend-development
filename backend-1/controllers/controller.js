let GetHome = (req, res) => {
    res.status(200).send("Welcome to home page")
}

let GetAbout = (req, res) => {
    res.status(200).send("Welcome to About page")
}

let GetService = (req, res) => {
    res.status(200).send("Welcome to Service page")
}

let Get404 = (req, res) => {
    res.status(404).send("page not found 404 !")
}

export { GetHome , GetAbout , GetService , Get404}