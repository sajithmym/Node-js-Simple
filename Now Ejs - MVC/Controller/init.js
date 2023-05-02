const Show = require("./def")

const name = (req,res,next)=>{
    // console.log("Sajithmym 2");
    res.render('name',{title:"Name"})
}

const dev = (req,res,next)=>{
    // console.log("Sajithmym 3");
    res.render('dev',{title:"Developer"})
}

const root = (req,res,next)=>{
    // res.sendFile(path.join(__dirname,"..","views","shop.html"))
    res.render("shop",{title:"Home page",data : Show.data})
}

module.exports.Name = name
module.exports.Dev = dev
module.exports.Root = root