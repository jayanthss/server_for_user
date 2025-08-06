const mongoose = require('mongoose');

const user_schma = new mongoose.Schema({
  name:String,
  age:Number,
  in_circket:Boolean,
  eduction:String
})

const user_update = mongoose.model('user_update',user_schma,'User detalis');

module.exports = user_update;