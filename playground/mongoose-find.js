const {MongoClient , ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users',(err,client)=>{
  if(err){
    return console.log('Unable to connect with mongodb server', err);
  }


  console.log('connected with mongodb server');
  const db = client.db('Users');

  db.collection('user').find().count().then((count)=>{
    console.log(`Total number of users are : ${count}`);
  } , (err)=>{
    console.log('Unable to fetch data', err);
  });


  //client.close();
});
