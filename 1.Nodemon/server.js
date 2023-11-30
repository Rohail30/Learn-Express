const express = require('express')
const app = express()

app.get('/', (req,res) => {
    console.log("Your Console Msg")
    res.send("This Msg will be displayed at http://localhost:3000")
})

app.listen(3000)