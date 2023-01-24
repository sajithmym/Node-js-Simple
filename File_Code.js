const FILE = require("fs")

FILE.readFile("./File/one.txt","utf8",(err,data) => {
    if (err){
        return
    }
    else{
        console.log(data);
    }
})

console.log("\n \t ---- The End ----- \n");