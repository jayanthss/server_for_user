const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testing',({
  useNewUrlParser :true,
  useUnifiedTopology :true
}))

const db  = mongoose.connection;

db.on('connected',()=>{
  console.log('MongoDB is Connected');
})
db.on('disconnected',()=>{
  console.log('MongoDB is disConnected');
})
db.on('error',()=>{
  console.log('MongoDB is error');
})


module.exports = db;

