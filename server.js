require('dotenv').config()
const express = require('express')
const app = express()

const data = "Axddeq@0042ereesp66"

app.get('/', (req, res)=>{
    res.send(data)
})

app.get('/google', (req, res)=> {
    res.send("https://www.google.com")
})

app.listen(process.env.PORT, ()=>{
    console.log("Listening on port 1111 ")
})