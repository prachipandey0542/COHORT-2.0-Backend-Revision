const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  title: String,
  desc: String,
});

const notesModel = mongoose.model("notes", noteSchema);

module.exports = notesModel;
