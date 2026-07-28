const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Welcome Back to my Note Application");
});

notes = [];

app.post("/notes", (req, res) => {
  const { title, desc } = req.body;
  notes.push({ title, desc });
  res.status(201).json({
    msg: "note created...",
  });
});

app.get("/notes", (req, res) => {
  res.status(200).json({
    msg: "notes fetched...",
    notes,
  });
});

app.put("/notes/:id", (req, res) => {
  const { title, desc } = req.body;
  const id = req.params.id;

  notes[id].title = title;
  notes[id].desc = desc;

  res.status(200).json({
    msg: "note updated...",
  });
});

app.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  delete notes[id];
  res.status(200).json({
    msg: "note deleted..",
  });
});

module.exports = app;
