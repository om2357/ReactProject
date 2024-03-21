require('dotenv').config()
const express = require('express')
// import express from  "express"
const app = express()
const port = 3000

app.get('/',(req, res) => {
    res.send("Hello")
})
app.get('/twitter', (req, res) => {
    res.send("Nothing")
})
app.get('/Check', (req, res) =>{
    res.send("<h1>This is h1 tag !!!! </h1>")
})
app.get('/login', (req, res) =>{
    res.send("<h2> This is chec !! :)</h2>")
})
app.listen(process.env.PORT, () =>{
    console.log(`example app listening on port ${port}`)
})