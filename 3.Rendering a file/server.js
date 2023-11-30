const express = require('express')
const app = express()

//tell our application to use view engine
app.set("view engine", "ejs") //you can also use pug file instead of ejs

app.get('/', (req,res) => {
    console.log("This Msg will be displayed at http://localhost:3000")
    res.render("index", {text: "message"})

})

app.listen(3000)