const web = require("http")

const Server = web.createServer((req, res) => {
    if (req.url === '/') 
        res.end("<h1 Style = 'margin-top:250px;color:orange;text-align:center;'>Welcome to Sajithmym</h1>")
    else if (req.url === '/sajith') 
        res.end("<h1 Style = 'margin-top:250px;color:purple;text-align:center;'>Sajithmym</h1>")
    else if (req.url === '/about') 
        res.end("<h1 Style = 'margin-top:250px;color:orangered;text-align:center;'>This is our History</h1>")
    else
        res.end("<h1 Style = 'margin-top:250px;color:darkblue;text-align:center;'>Oops!</h1> <center> <a Style = 'margin-top:50px;color:darkblue;font-size:25px;' href='/'>Go Back </a> </center>")

})

Server.listen(5011)
console.log("Server Strat in http://127.0.0.1:5011/");

//npm i nodemon