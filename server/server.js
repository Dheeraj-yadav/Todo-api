var express = require('express');

var bodyParser = require('body-Parser');

//using the configuration from mongoose.js
var {mongoose} = require('./db/mongoose');

//using the Todo file function here

var {Todo} = require('./models/todo');

//for users file

var{Users} = require('./models/users');

var app = express();
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

app.listen(3000, () => {
  console.log('started on port 3000');
});
