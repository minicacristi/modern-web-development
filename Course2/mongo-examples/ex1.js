// import the mongo client
const mdbclient = require('mongodb').MongoClient;

// connect to the local db
const url = 'mongodb://localhost:27017/';
const config = {
  db: 'testdb',
  collection: 'testCollection'
};

// connect to the server
mdbclient.connect(url, (err, conn) => {
  if (err)
    return console.error(err);
  // create/connect to testdb database
  var db = conn.db(config.db);
  db.createCollection(config.collection, (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Created a collection named ${config.db}` + 
        ` in database ${config.collection}`);
    }
    // if the connection is not closed the node process will hang
    conn.close();
  });
});
