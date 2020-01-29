const {MongoClient , ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users',(err,client)=>{
  if(err){
    return console.log('Unable to connect with mongodb server', err);
  }


  console.log('connected with mongodb server');
  const db = client.db('Users');

  db.collection('user').findOneAndDelete({name:'rahul'}).then((result)=>{
    console.log(result);
  },(err)=>{
    console.log('Unable to delete the user',err);
  });

  //client.close();
});
