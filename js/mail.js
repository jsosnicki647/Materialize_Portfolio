const express = require("express")
const bodyParser = require("body-parser")
const exphbs = require("express-handlebars")
const nodemailer = require("nodemailer")
const path = require("path")
const app = express()

app.engine("handelbars", exphbs())
app.set("view engine", "handlebars")

app.use("../", express.static(path.join(_dirname, "contact")))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.render("contact")
    console.log(res)
})

app.listen(3000, () => console.log("Server started..."))