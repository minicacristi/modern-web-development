const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create database
mongoose.connect('mongodb://localhost:27017/testdb');
mongoose.set('debug', true);

// book schema
const bookSchema = new Schema({
  isbn: { type: String, required: true },
  author: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: Date, default: Date.now },
  tags: [String]
});

// create book model
const Book = mongoose.model('Book', bookSchema);

// create map reduce object
let mr = {
  query: {author: 'John Doe'},
  map: function() {
    // if there are no pages then it will receive null
    emit(this.author, this.pages || 0);
  },
  reduce: function(author, pages) {
    return Array.sum(pages);
  }
};

// call map reduce function with the map reduce configuration
Book.mapReduce(mr, (err, results, stats) => {
  if (err)
    return console.error(err);
  console.log(results);
});