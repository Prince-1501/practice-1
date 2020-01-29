const {mongoose } = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todos.js');
const {ObjectID} = require('mongodb');

var id = '5e31ce6ec44f6d132a57114b';

if(!ObjectID.isValid(id)){
  console.log('ID not Valid');
}

Todo.findById(id).then((todo)=>{
  if(!todo){
    return console.log('Id not Found');
  }
  console.log('Todo by Id : ',todo);
}).catch((e)=>console.log(e));
