var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var app = express();


app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));


app.post('/', function(req, res) {
    if(req.body.email === "") {
        res.send("Error: Email should not be Blank");
        return false;
    }

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'yaroslav.prokipchyn@gmail.com',
            pass: 'Prokipchyn13101982'
        }
    });

    var mailOptions = {
        from: req.body.name + " - " +req.body.phone + "<" + req.body.email+ ">",
        to: 'yaroslav.prokipchyn@gmail.com',
        subject: "Message from Codecagon site",
        html: "<p>"+req.body.message+"<p>"
    };
    transporter.sendMail(mailOptions, function(error, response) {
        if (error) {
            res.send("Email could not be sent due to error:" +error);
        }else {
            res.send("Email has been sent successfully");
        }
    });
});

app.listen(process.env.PORT || 3000, function() {
    console.log("LISTENING!");
});