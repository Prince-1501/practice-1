const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');



var newTodo = new Todo({
  text:'cook dinner',
  completed:true
});

var otherTodo = new Todo({
  text:'Drink milk',
  completed:true
});

// newTodo.save().then((doc)=>{
//   console.log('saved Todo', doc);
//
// },(err)=>{
//   console.log('Unable to save todo',err);
// });


otherTodo.save().then((doc)=>{
  console.log('saved Todo',doc);
},(err)=>{
  console.log('Unable to save todo',err);
});
