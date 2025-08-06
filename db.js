const mongoose = require("mongoose");
require('dotenv').config();
const mongoURL_atlas = process.env.mongoURL;
const mongoURL = mongoURL_atlas;

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
