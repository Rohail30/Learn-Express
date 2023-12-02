const express = require("express")
const router = express.Router()


router.get("/", (req, res) => {
  res.send("Main User Page")
})

router.get("/new", (req, res) => {
  res.send("New Page")
})


module.exports = router