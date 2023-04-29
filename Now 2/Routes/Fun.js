const express = require("express")
const path = require("path")

const router = express.Router()

router.post('/message',(req,res,next)=>{
    console.log("Sajithmym 3");
    console.log(req.body,req.path);
    // console.log(req.body[lname]);
    res.redirect("/")
})

router.get('/add',(req,res,next)=>{
    console.log("Sajithmym 3");
    res.sendFile(path.join(__dirname,"..","views","add.html"))
})

module.exports = router