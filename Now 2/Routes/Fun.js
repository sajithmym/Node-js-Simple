const express = require("express")

const router = express.Router()

router.post('/message',(req,res,next)=>{
    console.log("Sajithmym 3");
    console.log(req.body);
    // console.log(req.body[lname]);
    res.redirect("/")
})

router.get('/add',(req,res,next)=>{
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

            <form action="/fun/message" method="POST">
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

module.exports = router