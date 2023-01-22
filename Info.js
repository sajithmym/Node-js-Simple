const info = require("os")

let details = {
    name : info.type(),
    release : info.release(),
    TotalMemory : info.totalmem(),
    FreeMemory : info.freemem()
}

console.log(`\n \t Hellow ${info.userInfo().username} \n`);
console.log(info.userInfo());

console.log('\n');

console.log(`The Ststem Uptime is ${info.uptime()/(60*60)} Hour...`);

console.log('\n');

console.log(details);