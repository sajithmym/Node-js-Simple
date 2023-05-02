const exp = require("express")

const Dude_route = exp.Router()

Dude_route.get("/a",(req,res,n) => {
    console.log("I am a");
})

Dude_route.use('/',(req,res,n) => {
    console.log("page not found...");
    res.render('ms')
})

module.exports.r = Dude_route