var express = require('express');

// .................

var bodyParser = require('body-parser');

// .................

var nodemailer = require('nodemailer');

var app = express();

// ................. 
app.use(bodyParser.json());
// to support URL-encodede bodies
app.use(bodyParser.urlencoded({extended: true}));
// .................





app.get("/Welcome",(req,res)=>{
     res.send("Welcome to coding competition #2 By Sneha Dileep,Norka B3 :)"); 
 });






app.post("/Home",(req,res)=>{

    
    var uemail = req.body.useremail;
    var upassword = req.body.userpassword;
    console.log("data recieved : " + uemail + " " + upassword );
    res.send("server responding : " + uemail + " " + upassword );

});


app.post("/msg",req,res)

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});





app.listen(3333,()=>{
    console.log("server is ready at 3333");
});