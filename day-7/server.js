const server = require("./src/app.js");
const connectDB = require("./src/config/database.js");

connectDB();

server.listen(3000, () => {
  console.log("Server Runngin...");
});
