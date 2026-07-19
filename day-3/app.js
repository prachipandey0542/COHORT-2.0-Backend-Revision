const express = require("express");
const app = express();

app.use(express.json());

notes = [];

app.get("/", (req, res) => {
  res.send("Welcome to my Note Manage Application");
});

// Create Notes
app.post("/notes/create", (req, res) => {
  const { title, desc } = req.body;
  notes.push({
    title,
    desc,
  });
  res.status(201).json({
    msg: "Note created Succefully",
  });
});

// Read Notes
app.get("/notes/read", (req, res) => {
  res.status(200).json({
    msg: "Notes Fetched Successfully...",
    notes,
  });
});

app.listen(3000, () => {
  console.log("Server Running...");
});
