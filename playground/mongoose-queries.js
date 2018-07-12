const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {users} = require('./../server/models/users');

var id = '5b447c155525c81180bb7e1b';

if(!ObjectID.isValid(id)) {
  console.log('id not valid');
}
//to find anything
Todo.find({
  _id : id
}).then((todos) => {
  console.log('Todos',todos);
});
//to find any one which comes first
Todo.findOne({
  _id : id
}).then((todo) => {
  console.log('Todo',todo);
});
//to find by id
Todo.findById(id).then((todo) => {
  if(!todo){
    return console.log('id not found');
  }
  console.log('Todo by id',todo);
});//.catch((e) => console.log(e));//to catch the error
