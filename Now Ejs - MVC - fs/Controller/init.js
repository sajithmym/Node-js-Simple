const ModelByMe = require("../Models/list")

const name = (req, res, next) => {
    // console.log("Sajithmym 2");
    res.render('name', { title: "Name" })
}

const dev = (req, res, next) => {
    // console.log("Sajithmym 3");
    res.render('dev', { title: "Developer" })
}

const root = (req, res, next) => {
    let Full = ModelByMe.fetchAll()
    res.render("shop", { title: "Home page", data: Full } )
}

module.exports.Name = name
module.exports.Dev = dev
module.exports.Root = root