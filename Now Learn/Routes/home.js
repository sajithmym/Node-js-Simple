const express = require("express")

const router = express.Router()

router.get('/name',(req,res,next)=>{
    console.log("Sajithmym 2");
    res.send(` <Center> <h2 style="margin-top:10%;"> Hi i am Sajithmym... </h2> </Center>`)
})

router.get('/dev',(req,res,next)=>{
    console.log("Sajithmym 3");
    res.send(` <Center> <h2 style="margin-top:10%;"> Hi i am Nodeja Developer... </h2> </Center>`)
})



router.get('/',(req,res,next)=>{
    console.log("i am initial page");
    res.send(` <Center> <h2 style="margin-top:10%;"> - Welcome To My Application - </h2> </Center>`)
})

module.exports = router