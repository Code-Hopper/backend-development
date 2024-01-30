let EmojiArray = [
    { id: 7, emoji: "😊", emojiName: "Smiley1", aboutEmoji: "this is a normal emoji1", timeStamp: "already" }
]

let GetHome = (req, res) => {
    console.log(req.query.deleteEmoji)


    let whatToDelte = req.query.deleteEmoji

    if (req.query.deleteEmoji) {
        console.log("delete")

        EmojiArray = EmojiArray.filter((element, index) => {
            return element.id != whatToDelte
        })

        res.status(201).redirect("/")


    } else {
        console.log("nothing to delete")
        res.status(200).render("index.ejs", { EmojiArray })
    }
}

let PostHome = (req, res) => {

    console.log(req.body)

    let newEmojiObject = req.body

    let date = new Date()

    let whatTime = `${date.toLocaleTimeString()} | ${date.toLocaleDateString()} `

    console.log(whatTime)

    newEmojiObject = { ...newEmojiObject, id: EmojiArray[EmojiArray.length - 1].id + 1 , timeStamp: whatTime }

    EmojiArray.unshift(newEmojiObject)

    console.log(EmojiArray)

    res.status(201).redirect("/")
}

export { GetHome, PostHome }