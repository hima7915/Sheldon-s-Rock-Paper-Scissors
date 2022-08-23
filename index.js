//JSHint esversion:6

const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express() ;
app.use(express.static(path.resolve('shellyspock/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
  app.get('/', (req, res) => {
    res.sendFile(path.resolve("shellyspock/build/index.html"));
    //res.send("<h1>Hello</h1>");
  });
  app.listen(PORT, function(){
    console.log("Finally!");
  });