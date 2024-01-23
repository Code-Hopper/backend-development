import express from "express"

let router = express()

router.get("/", (req, res) => {
    res.status(200).send("Welcome user this is our first server page")
})

router.get("/service", (req, res) => {
    res.send("Welcome user this is our service server page")
})

router.get("/about", (req, res) => {
    res.send("Welcome user this is our about server page")
})

router.get("*", (req, res) => {
    res.status(404).send("Page Not Found 404 !")
})

export { router }