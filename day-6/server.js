const server = require("./src/app.js");
const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/day-6");
  console.log("DB Connected!");
};

connectDB();

server.listen(3000, () => {
  console.log("Server Running...");
});
