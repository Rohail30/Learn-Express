const express = require("express");
const app = express();

//Middleware
app.use(express.static("public"));

app.listen(3000);
