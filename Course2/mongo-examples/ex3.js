// import the mongo client
const mdbclient = require('mongodb').MongoClient;

// connect to the local db
const url = 'mongodb://localhost:27017/';
const config = require('./config.js');
// connect to the server
mdbclient.connect(url, (err, conn) => {
  if (err)
    return console.error(err);
  // create/connect to testdb database
  var db = conn.db(config.db);
  // get collection
  db.collection(config.collection, (err, collection) => {
    if (err) {
      conn.close();
      console.error(err);
    }
    //setTimeout(() => {
      collection.find({name: 'Vlad'}).toArray((err, docs) => {
        if (err)
          return console.error(err);
        console.log(docs);
        // conn.close()
      });
    //}, 2000);

    // if the connection is not closed the node process will hang
    conn.close();
  });
});
