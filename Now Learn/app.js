const Express = require("express")
const BodyParser = require("body-parser")
// const Http = require("http")
const app = Express()

app.use(BodyParser.urlencoded({extended : false}))

app.use('/',(req,res,next)=>{
    console.log("initial step")
    next()
})


app.use('/name',(req,res,next)=>{
    console.log("Sajithmym 2");
    res.send(` <Center> <h2 style="margin-top:10%;"> Hi i am Sajithmym... </h2> </Center>`)
})

app.use('/dev',(req,res,next)=>{
    console.log("Sajithmym 3");
    res.send(` <Center> <h2 style="margin-top:10%;"> Hi i am Nodeja Developer... </h2> </Center>`)
})

app.post('/message',(req,res,next)=>{
    console.log("Sajithmym 3");
    console.log(req.body);
    // console.log(req.body[lname]);
    res.redirect("/")
})

app.use('/add',(req,res,next)=>{
    console.log("Sajithmym 3");
    res.send(`

    <html>
        <head> 
            <title> Sajithmym </title>
        <head>

        <body bgcolor="black">
            <center>
            <h1 style="margin-top:50px;color:white"> 
            Sent Request </h1>

            <form action="/message" method="POST">
                <label for="fname">First name:</label><br>
                <input type="text" id="fname" name="fname" value=""><br>
                <label for="lname">Last name:</label><br>
                <input type="text" id="lname" name="lname" value=""><br><br>
                <input type="submit" value="Submit">
            </form> 

            <p>If you click the "Submit" button, the form-data will 
            be sent to a page called "/action_page.php".</p>
            </center>
        </body>
    </html>

    `)
})

app.use('/',(req,res,next)=>{
    console.log("i am always run");
    res.send(` <Center> <h2 style="margin-top:10%;"> - Welcome - </h2> </Center>`)
    next()
})

// const server  = Http.createServer(app)

// server.listen(8011,()=> {
//     console.log("Server Start in http://127.0.0.1:8011");
// })   We can replace this code

app.listen(8011,()=> {
    console.log("Server Start in http://127.0.0.1:8011");
})
