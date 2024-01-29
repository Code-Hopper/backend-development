let EmojiArray = [
    { id: 1, emoji: "😊", emojiName: "Smiley1", aboutEmoji: "this is a normal emoji1" },
    { id: 2, emoji: "❤️", emojiName: "Heart", aboutEmoji: "this is a heart emoji" },
    { id: 3, emoji: "😊", emojiName: "Smiley3", aboutEmoji: "this is a normal emoji3" },
    { id: 4, emoji: "😊", emojiName: "Smiley4", aboutEmoji: "this is a normal emoji4" },
    { id: 5, emoji: "😊", emojiName: "Smiley5", aboutEmoji: "this is a normal emoji5" },
    { id: 6, emoji: "😊", emojiName: "Smiley6", aboutEmoji: "this is a normal emoji6" },
    { id: 7, emoji: "😊", emojiName: "Smiley7", aboutEmoji: "this is a normal emoji7" },
    { id: 8, emoji: "😊", emojiName: "Smiley8", aboutEmoji: "this is a normal emoji8" },
    { id: 9, emoji: "😊", emojiName: "Smiley9", aboutEmoji: "this is a normal emoji9" },
    { id: 10, emoji: "😊", emojiName: "Smiley10", aboutEmoji: "this is a normal emoji10" },
    { id: 11, emoji: "😊", emojiName: "Smiley11", aboutEmoji: "this is a normal emoji11" }
]

let GetHome = (req, res) => {
    res.status(200).render("index.ejs", { EmojiArray })
}

let PostHome = (req, res) => {
    console.log(req.body)
    let newEmojiObject = req.body

    EmojiArray.push(newEmojiObject)
    
    res.status(201).render("index.ejs", { EmojiArray })
}

export { GetHome, PostHome }