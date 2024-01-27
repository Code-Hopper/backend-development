let GetHome = (req, res) => {
    let someData = "Some data 123 abc xyz"
    res.status(200).render("index.ejs", { someData, newData: "new data 123" })
}

let GetAbout = (req, res) => {
    res.status(200).render("about.ejs")
}

let GetContact = (req, res) => {
    res.status(200).send("welcome to Contact page")
}

let GetService = (req, res) => {
    res.status(200).send("welcome to Service page")
}

export { GetHome, GetAbout, GetService, GetContact }