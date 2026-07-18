const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world....");
});

app.get("/home", (req, res) => {
  res.send("This is Home Page");
});

app.get("/about", (req, res) => {
  res.send("this is abbout page..");
});

app.listen(3000, () => {
  console.log("Server Runnign....");
});
