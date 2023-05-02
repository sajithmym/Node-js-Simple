const exp = require("express")

const Dude_route = exp.Router()

Dude_route.get("/",(req,res,n) => {
    console.log("I am Root");
})

module.exports.r = Dude_route