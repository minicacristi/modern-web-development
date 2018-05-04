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
      return console.error(err);
    }
    // will update just the first document with name Vlad
    collection.updateOne({ name : 'Vlad' },
      { $set: { name : 'Vladimir' } }, (err, resp) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Modified ${resp.result.n} elements`);
      }
      // if the connection is not closed the node process will hang
      conn.close();
    });
  });
});
