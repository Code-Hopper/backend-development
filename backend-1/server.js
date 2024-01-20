const express = require("express")

const app = express()

let port = 3021

// localhost:port

app.get("/",(req,res)=>{
  res.send("Welcome user this is our first server page")  
})

app.get("/service",(req,res)=>{
    res.send("Welcome user this is our service server page")  
})
  
app.get("/about",(req,res)=>{
    res.send("Welcome user this is our about server page")  
})
  

app.listen(port,()=>{
    console.log(`Server is Running On Port: ${port} !`)
})