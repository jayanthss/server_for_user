const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const port = process.env.PORT || 3000

const user_update = require('./model/user')
const body_parser = require('body-parser');
app.use(body_parser.json())


app.get('/user',async(req,res)=>{
  const info = await user_update.find();
  res.status(200).json({info})
})

app.post('/user_Update',async(req,res)=>{
  try{
  const user_defined = req.body;
  const compare =  new user_update(user_defined);
  const info = await compare.save();
  console.log(info);
  res.status(200).json({info});
  }catch(err){
    console.log('error is occured', err);
    res.status(500).json({err})
  }

})

app.get('/start',(req,res)=>{
  res.status(200).send('Server is Runing....')
});


//this my first version

app.listen(port,()=>{
  console.log('Server is Satrted at',port);
})