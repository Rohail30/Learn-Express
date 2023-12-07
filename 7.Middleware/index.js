const express = require("express")
const app = express()
const users = require('./MOCK_DATA.json')

//Middleware
app.use(logger)

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Hello World!')
})

app.get('/user/:id', (req,res)=>{
    let userId= Number(req.params.id);
    let user = users.find(u=>u.id==userId)
    res.json(user)
})

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

app.listen(3000)