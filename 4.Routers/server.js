const express = require('express')
const app = express()

app.get('/', (req,res) => {
    console.log("Your Console Msg")
    res.send("This Msg will be displayed at http://localhost:3000")
})

//creating a variable and inserting all the user.js function in the variable
const userRouter = require("./routes/users")

//you can create different routes for different methods
//const postRouter = require("./routes/posts")

app.use('/users', userRouter)
//app.use('/users', postRouter)

app.listen(3000)