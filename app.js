console.log("ONLINE TUTORIALS EXPRESS JS WEBSITE");
// Import Express Module
const express = require("express");
const fs = require("fs"); 
const port = process.env.PORT || 8080; // run On port
// Calling Express
const app = express();

// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ContactForm', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connection Establashed");
});
const formDataSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    age: String,
    password: String,
    message: String
  });
const loginData = mongoose.model('loginData', formDataSchema);
// Accessing Static Files
app.use(express.static('public'));
// Set pug as template engine
app.set("view engine","pug");
app.use(express.urlencoded());

app.get("/",(req,res)=>{
    res.status(200).render("index");
 })

 app.post("/contact",(req,res)=>{
     var myData = new loginData(req.body);
     myData.save().then(()=>{
         res.render("index",{msg : 'Sucess'});
     }).catch(()=>{
         res.status(200).send("404 Page not found");
     })
 })


app.listen(port);

// app.listen(port,()=>{
//     console.log(`This Server Running on port: ${port}`);
// })

