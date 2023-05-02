const express = require("express")
const path = require("path")

const router = express.Router()

const Show = require("./Fun")

router.get('/name',(req,res,next)=>{
    // console.log("Sajithmym 2");
    res.render('name',{title:"Name"})
})

router.get('/dev',(req,res,next)=>{
    // console.log("Sajithmym 3");
    res.render('dev',{title:"Developer"})
})



router.get('/',(req,res,next)=>{
    // res.sendFile(path.join(__dirname,"..","views","shop.html"))
    res.render("shop",{title:"Home page",data : Show.data})
})

module.exports = router