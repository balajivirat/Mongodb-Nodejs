var mongoclient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

mongoclient.connect(url,(err, db) => {
    if(err) throw err;
    var dbmy = db.db('mydbfirst');
    var mydata = { name: "balaji", age: "24"};

    dbmy.collection('webuser').insertOne(mydata, (err, res) => {
        if(err) throw err;
        console.log("Document inserted");
        db.close();
    })
})