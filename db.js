const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://jayanthkumar:Sssssjayanth7$@userupdate.izij2ug.mongodb.net/";

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB is Connected");
});
db.on("disconnected", () => {
  console.log("MongoDB is disConnected");
});
db.on("error", () => {
  console.log("MongoDB is error");
});

module.exports = db;
