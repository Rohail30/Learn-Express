const express = require('express')
const app = express()

app.get('/', (req,res) => {
    console.log("Your Console Msg")
    res.send("This Msg will be displayed at http://localhost:3000")
})

//try this code here:
// app.get('/new', (req, res) => {
//     res.send(`User display new`)
// })


app.get('/:id', (req, res) => {
    res.send(`Get User with ID ${req.params.id}`)
})

app.get('/new', (req, res) => {
    res.send(`User display new`)
})

app.listen(3000)