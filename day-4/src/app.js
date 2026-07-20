const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Heello World....");
});

notes = [];

// create notes
app.post("/notes/create", (req, res) => {
  const { title, desc } = req.body;
  notes.push({ title, desc });
  res.status(201).json({
    msg: "notes created successfully...",
  });
});

// read notes
app.get("/notes/read", (req, res) => {
  res.status(200).json({
    msg: "notes fetched successfully...",
    notes,
  });
});

// update notes
app.put("/notes/update/:id", (req, res) => {
  const { title, desc } = req.body;
  const id = req.params.id;

  notes[id].title = title;
  notes[id].desc = desc;

  res.status(200).json({
    msg: "note updated successfully...",
  });
});

// delete notes
app.delete("/notes/delete/:id", (req, res) => {
  id = req.params.id;
  delete notes[id];
  res.status(200).json({
    msg: "note deleted successfully...",
  });
});
module.exports = app;
