var express = require('express');
const {ObjectID} = require('mongodb');
var bodyParser = require('body-Parser');

//using the configuration from mongoose.js
var {mongoose} = require('./db/mongoose');

//using the Todo file function here

var {Todo} = require('./models/todo');

//for users file

var{Users} = require('./models/users');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

//giving parameters for the todo

app.post('/todos',(req,res) => {
var todo = new Todo({
  text: req.body.text
});

//saving the todo we made

todo.save().then((docs) => {
  res.send(docs);
},(e) => {
  res.status(400).send(e);
});
});

//for returning all the todos
app.get('/todos', (req,res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  },(e) => {
    res.status(400).send(e);
  });
});

//get dynamic id
app.get('/todos/:id', (req,res) => {
  var id = req.params.id;

if(!ObjectID.isValid(id)) {
return res.status(404).send();
}
  Todo.findById(id).then((todo) => {
    if(!todo){
  return res.status(400).send();
    }
  res.send({todo});
}).catch((e) => {
  res.status(400).send();
});
});
//to delete a route
app.delete('/todos/:id',(req,res) => {
var id = req.params.id;

if(!ObjectID.isValid(id)) {
  return res.status(400).send();
}

Todo.findByIdAndRemove(id).then((todo) => {
  if(!todo){
    return res.status(400).send();
  }

  res.send(todo);
}).catch((e) => {
  res.status(400).send();
});
});
app.listen(port, () => {
  console.log(`started on port ${port}`);
});

module.exports = {app};
