const Express = require("express")
const BodyParser = require("body-parser")

const method = require("./Routes/Fun")
const Home =  require("./Routes/home")
// const Http = require("http")
const app = Express()

app.use(BodyParser.urlencoded({extended : false}))

app.use("/fun",method)

app.use(Home)

app.use("/",(req,res,next)=>{
    res.status(404).send(` <Center> <h2 style="margin-top:10%;"> Page Not Found </h2> </Center>`)
})

// const server  = Http.createServer(app)

// server.listen(8011,()=> {
//     console.log("Server Start in http://127.0.0.1:8011");
// })   We can replace this code

app.listen(8011,()=> {
    console.log("Server Start in http://127.0.0.1:8011");
})
