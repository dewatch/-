const MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/test';




MongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
    if(err){
        console.log(err);
    }
    console.log("connected!")
})