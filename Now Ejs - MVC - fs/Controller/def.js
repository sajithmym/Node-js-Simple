const Model = require("../Models/list")

const msg = (req, res, next) => {
    // console.log("Sajithmym 3");
    // console.log(req.body);
    // Data.push({ title: req.body.fname })
    const item = new Model(req.body.fname)
    item.save()
    res.redirect("/")
}

const add = (req, res, next) => {
    // console.log("Sajithmym 3");
    // res.sendFile(path.join(__dirname, "..", "views", "add.html"))
    res.render("add",{title:"Adding page"})
}

exports.Message = msg
exports.Add = add