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
    const pro = ModelByMe.fetchAll()
    console.log(pro);
    res.render("shop", { title: "Home page", data: pro })
}

module.exports.Name = name
module.exports.Dev = dev
module.exports.Root = root