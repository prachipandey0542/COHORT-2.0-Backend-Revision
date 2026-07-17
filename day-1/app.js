const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello welcome...");
});

app.listen(3000, () => {
  console.log("Server Running...");
});
