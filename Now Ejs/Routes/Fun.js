const express = require("express")
const path = require("path")

const router = express.Router()

const Data = []

router.post('/message', (req, res, next) => {
    console.log("Sajithmym 3");
    // console.log(req.body);
    Data.push({ title: req.body.fname })
    res.redirect("/")
})

router.get('/add', (req, res, next) => {
    console.log("Sajithmym 3");
    // res.sendFile(path.join(__dirname, "..", "views", "add.html"))
    res.render("add",{title:"Adding page"})
})

module.exports.Router = router
module.exports.data = Data