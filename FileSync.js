const File = require("fs")

let a = File.readFileSync("./File/one.txt","utf8")
let b = File.readFileSync("./File/second.txt","utf8")

console.log("\nFirst File : "+a+'\n')
console.log("\nSecond File : "+b+'\n')

File.writeFileSync("./File/Result.txt",`Fisrst : ${a}\n Second : ${b} \n By Sajithmym\n`)

let c = File.readFileSync("./File/Result.txt","utf8")
console.log(c)