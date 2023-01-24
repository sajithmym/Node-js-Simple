const show = require("http")

const server = show.createServer((req, res) => {
    if (req.url === '/')
        res.end("<h1 Style = 'margin-top:250px;color:orange;text-align:center;'>Welcome to Sajithmym</h1>")
    else if (req.url === '/sajith')
        res.end("<h1 Style = 'margin-top:250px;color:purple;text-align:center;'>Sajithmym</h1>")
    else if (req.url === '/about')
        res.end("<h1 Style = 'margin-top:250px;color:orangered;text-align:center;'>This is our History</h1>")
    else
        res.end("<h1 Style = 'margin-top:250px;color:darkblue;text-align:center;'>Oops!</h1> <center> <a Style = 'margin-top:50px;color:darkblue;font-size:25px;' href='/'>Go Back </a> </center>")
})
server.listen("5051")

console.log("Server Address is http://127.0.0.1:5051");