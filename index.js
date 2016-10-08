var MongoClient = require('mongodb').MongoClient, 
	assert = require('assert');

//Connection URL
var url = 'mongodb://phantom:27017/media';

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});
