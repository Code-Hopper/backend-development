let data = [

    { id: 1, language: "c", duration: "1 Month", level: "hard" },
    { id: 2, language: "C++", duration: "1.5 Month", level: "hard" },
    { id: 3, language: "JavaScript", duration: "2 Months", level: "easy" },
    { id: 4, language: "Ejs", duration: "1 Day", level: "hard" },
    { id: 5, language: "node.js", duration: "Instantly", level: "hard" },
    { id: 6, language: "express", duration: "1 Month", level: "very hard" },
    { id: 7, language: "HTML", duration: "1 Month", level: "very easy" },
    { id: 8, language: "CSS", duration: "1 Month", level: "Medium Hard" },
    { id: 9, language: "Bootstrap", duration: "5 Days", level: "easy" },
    { id: 10, language: "React", duration: "Infinity", level: "Exterm Hard" },

]


let GetHome = (req, res) => {
    res.status(200).json({ "message": "hello and welcome !" })
}

let GetLanguages = (req, res) => {

    let randomID = Math.round(Math.random() * 9 + 1)

    console.log(randomID)


    let randomElemenet;

    data.filter((element) => {
        if(element.id == randomID){
            randomElemenet = element
        }
    })

    console.log(randomElemenet)

    res.status(200).json(randomElemenet)

}

export { GetHome, GetLanguages }