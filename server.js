const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const fileURLtopath = require("url")
const app = express();
const PORT = 5000
const path = require('path');

//static file wala middleware
app.use(express.static(path.resolve(__dirname,"./public")));

app.get('/',(req,res) => {
    res.send("Hello worldddd");
});

app.get('/home',(req,res) => {
    res.sendFile(path.resolve(__dirname,"./public","index.html"));
});

app.get('/contact',(req,res) => {
    res.sendFile(path.resolve(__dirname,"./public","contact.html"));
});

app.listen(PORT, () => 
console.log(`Server running on port ${PORT}`.yellow.bold)
);