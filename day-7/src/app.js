require("dotenv").config();
const express = require("express");
const notesModel = require("./models/notes.model.js");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World..");
});

// create notes
app.post("/notes", async (req, res) => {
  const { title, desc } = req.body;
  const note = await notesModel.create({ title, desc });
  res.status(201).json({
    msg: "note created...",
    note,
  });
});

// read notes
app.get("/notes", async (req, res) => {
  const notes = await notesModel.find();
  res.status(200).json({
    msg: "notes fetched...",
    notes,
  });
});

// update notes
app.put("/notes/:id", async (req, res) => {
  const { title, desc } = req.body;
  const id = req.params.id;
  const updatedNote = await notesModel.findOneAndUpdate(
    { _id: id },
    { title, desc },
    { new: true },
  );
  res.status(200).json({
    msg: "note updated",
    updatedNote,
  });
});

// delete notes
app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await notesModel.findOneAndDelete({ _id: id });
  res.status(200).json({
    msg: "note deleted...",
  });
});
module.exports = app;
