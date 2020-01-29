const {MongoClient , ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users',(err,client)=>{
  if(err){
    return console.log('Unable to connect with mongodb server', err);
  }


  console.log('connected with mongodb server');
  const db = client.db('Users');

  db.collection('user').findOneAndUpdate({
    _id: new ObjectId('5e31bb93e01cf011b854c9b7')
  },{
    $set:{
      smoke:true,
      age:70
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  });

  //client.close();
});
