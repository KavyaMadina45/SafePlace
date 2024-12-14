// var express =require('express')
// var bodyParser=require('body-parser')
// var mongoose=require('mongoose')
// const app=express()
// app.use(bodyParser.json())
// app.use(express.static("public"))
// app.use(bodyParser.urlencoded({
//     extended:true
// }))
// mongoose.connect("mongodb://Localhost:27017/mydb");
// var db=mongoose.connection;
// db.on("error",()=>console.log("error in connecting database"));
// db.once("open",()=>console.log("connected to database"));

// app.post("/verbal abuse",(req,res)=>{
//     var phone=req.body.phone;
//     var email=req.body.email;
//     var data={
//         "phone":phone,
//         "email":email

//     }
//     db.collection("users").insertOne(data,(err,collection)=>{
//         if(err){
//             throw err;
//         }
//         console.log("Record inserted successfully");
//     });
//     return res.redirect("verbal abuse.html")
// })

//     app.get("/",(req,res)=>{
//         res.set({"Allow-access-Allow-origin":"*"})
//         return res.redirect("contact.html")
//     }).listen(3000);
//     console.log("listening on port 3000")

// var express = require('express');
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// var nodemailer = require('nodemailer'); // Importing Nodemailer

// const app = express();

// app.use(bodyParser.json());
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// mongoose.connect("mongodb://localhost:27017/mydb");
// var db = mongoose.connection;

// db.on("error", () => console.log("Error in connecting database"));
// db.once("open", () => console.log("Connected to database"));

// app.post("/verbal-abuse", async (req, res) => {
//     try {
//         var phone = req.body.phone;
//         var email = req.body.email;

//         var data = {
//             "phone": phone,
//             "email": email
//         };

//         // Save data to MongoDB
//         await db.collection("users").insertOne(data);
//         console.log("Record inserted successfully");

//         // Configure Nodemailer
//         var transporter = nodemailer.createTransport({
//             service: 'gmail', // Use your email provider
//             auth: {
//                 user: 'madinakavya6@gmail.com', // Replace with your email
//                 pass: 'kavya@1234'   // Replace with your email password
//             }
//         });

//         // Email details
//         var mailOptions = {
//             from: 'madinakavya6@gmail.com', // Sender's email
//             to: 'pulicherlalatha123@gmail.com', // Counselor's email
//             subject: 'Verbal Abuse Report Notification',
//             text: `You have received a new verbal abuse report. 
// Phone: ${phone}
// Email: ${email}`
//         };

//         // Send email
//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 console.log('Error sending email:', error);
//             } else {
//                 console.log('Email sent: ' + info.response);
//             }
//         });

//         // Redirect user to verbal abuse page
//         return res.redirect("verbal-abuse.html");
//     } catch (error) {
//         console.log("Error:", error);
//         res.status(500).send("Internal Server Error");
//     }
// });

// app.get("/", (req, res) => {
//     res.set({ "Allow-access-Allow-origin": "*" });
//     return res.redirect("contact.html");
// }).listen(3000);

// console.log("Listening on port 3000");



if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    });
  }
  
