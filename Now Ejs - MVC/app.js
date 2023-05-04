const Express = require("express")
const db = require('./db');
const path = require("path")
const BodyParser = require("body-parser")

const method = require("./Routes/Fun")
const Home =  require("./Routes/home")

const app = Express()

app.use(BodyParser.urlencoded({extended : false}))
app.set("view engine","ejs")
app.set("views","views")
app.use(Express.static(path.join(__dirname,'css')))


app.use("/fun",method.Router)

app.use(Home)

app.use("/",(req,res,next)=>{
    // res.status(404).sendFile(path.join(__dirname,"views","ms.html"))
    res.render("ms")
})

// const server  = Http.createServer(app)

// server.listen(8011,()=> {
//     console.log("Server Start in http://127.0.0.1:8011");
// })   We can replace this code

app.listen(8011,()=> {
    console.log("Server Start in http://127.0.0.1:8011");
})
