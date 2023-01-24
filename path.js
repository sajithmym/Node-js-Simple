const path = require("path")
console.log(path.sep);

let TestPath = path.join("Code","Folder","Main.py")
console.log("Test Path :- "+TestPath);

let Base = path.basename(TestPath)
console.log("Base of Test path :- "+Base);

let Absolute_Path = path.resolve(__dirname,"path.js")
console.log(Absolute_Path);