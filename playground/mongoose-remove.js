const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {users} = require('./../server/models/users');
/*
//remove multiple records
Todo.remove({}).then((result) => {
  console.log(result);
});

//remove findOne
Todo.findOneAndRemove({_id:'5b447c155525c81180bb7e1b'}).then((todo) => {
  console.log(todo);
});
*/
//find by id and remove
Todo.findByIdAndRemove('5b447c155525c81180bb7e1b').then((todo) => {
  console.log(todo);
});
