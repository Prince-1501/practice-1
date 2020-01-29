const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todos.js');

var app = express();
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  //console.log(req.body.text);
  var newTodo = new Todo({
    text:req.body.text,
    completed:req.body.completed
  });

  newTodo.save().then((doc)=>{
    //res.send(doc);
    console.log('Data which we insert is :- ',doc);
  },(err)=>{
    console.status(400).log(err);
  });

});


app.listen(5000,()=>{
  console.log('Server is up on port 5000');
});
