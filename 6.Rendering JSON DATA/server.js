const express = require('express')
const app = express()

//The line const fs = require('fs'); is importing the built-in 'fs' (File System) 
const fs = require('fs');

// Your file is named simpleData.json
const filePath = 'simpleData.json';

// Read the file synchronously
const jsonData = fs.readFileSync(filePath, 'utf8');

// Parse the JSON string into a JavaScript object
const data = JSON.parse(jsonData);

// Now 'data' is a JavaScript variable containing the content of your JSON file
console.log(data);

app.set("view engine", "ejs")

app.get('/', (req,res) => {
    console.log("Here")
    res.render("index", { data: data})
    // res.json(data)
})

app.listen(3000)