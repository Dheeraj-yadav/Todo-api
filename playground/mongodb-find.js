//to query the data we do this.....
const {MongoClient,ObjectID} = require('mongodb');

//to connect to the server..first argument is url second is for error and database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , client) => {
  if(err){
  return console.log('unable to connect to server');
  }
  console.log('connected to server');

const db = client.db('TodoApp')

//access the collection for query
db.collection('Todos').find({
  _id:new ObjectID('5b41e410262d2275d103699c')
}).toArray().then((docs) => {
  console.log('Todos');
  console.log(JSON.stringify(docs,undefined,2));
},(err) => {
  console.log('unable to fetch');
});
//  to close the connection to mongodb
//client.close();

});
