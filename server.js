var http = require("http")
http.createServer(function (request,response)  {
    response.writeHead(200,{ 'Content-Type' : 'text/plain'})
    response.end("\n \t\tWelcome to Sajithmym\n ")
}).listen(8011)

console.log(`Server Start in http://127.0.0.1:8011`)