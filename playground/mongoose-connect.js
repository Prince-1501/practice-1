const {MongoClient , ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users',(err,client)=>{
  if(err){
    return console.log('Unable to connect with mongodb server', err);
  }


  console.log('connected with mongodb server');
  const db = client.db('Users');

  db.collection('user').insertOne({
    name : 'rakesh',
    age : 11,
    smoke : false

  },(err, result)=>{
    if(err){
      console.log('Unable to insert user data',err);
    }

    console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  });

  client.close();
});
