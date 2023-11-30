const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.sendStatus(200) //Send ok status
    // res.sendStatus(500) // Internal error
    // res.status(500).send("ok") // Internal error but will display ok: You can check error by opening the console
    // res.status(500).json({message: "Error"}) // send json message
    // res.download("server.js") // will download server.js file when reloaded

    //res.send("This Msg will be displayed at http://localhost:3000")
})

app.listen(3000)