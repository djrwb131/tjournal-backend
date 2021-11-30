const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
mongoose.connect("mongodb://localhost:27017/journal")
var db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"))
db.once("open", function(callback) {
  console.log("connection success")
})
const app = express()
var reqnum = 0
app.use(bodyParser.json())

app.get("/", (req,res) => {
  reqnum ++
  res.send("This was request number " + reqnum)
})

const JournalRoute = require("./Journal")
app.use("/journal", JournalRoute)
app.listen(3000, () => {
  console.log("listening on 3000")
})
