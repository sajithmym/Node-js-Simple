const exp = require("express")

const Dude_route = exp.Router()

Dude_route.get("/",(req,res,n) => {
    console.log("I am Root");
    res.render("Home",{title : "Home page"})
})

module.exports.r = Dude_route