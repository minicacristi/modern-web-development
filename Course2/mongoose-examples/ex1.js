const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create database
mongoose.connect('mongodb://localhost:27017/testdb');
mongoose.set('debug', true);
// book schema
const bookSchema = new Schema({
  isbn: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: Date, default: Date.now },
  pages: Number,
  tags: [String]
});

// create book model
const Book = mongoose.model('Book', bookSchema);

// create an instance of the book model
var book = new Book({
  isbn: '4',
  author: 'John Doe',
  name: 'Book of rings 3',
  tags: ['page', 'sequel'],
  pages: 100
});

// save instance
book.save((err, res) => {
  if (err)
    return console.error(err);
  console.log(res);
  // closing the db connection
  mongoose.disconnect((err) => {
    if (err)
      return console.error(err);
    console.log('Disconnected from mongodb.');
  });
});

