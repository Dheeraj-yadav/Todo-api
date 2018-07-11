const MongoClient = require('mongodb').MongoClient;

//to connect to the server..first argument is url second is for error and database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , client) => {
  if(err){
  return console.log('unable to connect to server');
  }
  console.log('connected to server');

  const db = client.db('TodoApp')

  //to add data to todo collection
  db.collection('Todos').insertOne({
    text:'something to do',
    completed:false
  },(err,result) => {
    if(err){
      return console.log('unable to insert',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });

db.collection('Users').insertOne({
  name:'Dheeraj Yadav',
  age:20,
  location:'gurugran Haryana',
  completed:false
},(err,result) => {
  if(err){
    console.log('unable to give data',err);
  }
  console.log(JSON.stringify(result.ops,undefined,2));
});
  //to close the connection to mongodb
client.close();
});
