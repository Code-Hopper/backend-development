let validateApiKey = (req, res, next) => {
    // console.log(`the api key entred is ${req.params.key}`)

    if (req.params.key === "code-hopper") {
        next()
    } else {
        res.status(401).json({ "messgae": "API Key doesn't matched !" })
    }

}

export { validateApiKey } 