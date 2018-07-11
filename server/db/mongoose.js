var mongoose = require ('mongoose');

//introducing promises
mongoose.Promise = global.Promise;

//connecting mongoose to database
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
