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

Book.aggregate([
  { $match: { author: 'John Doe' } },
  { $group: { _id: '$author', pagesWritten: { $sum: '$pages' } } }
], (err, docs) => {
  if (err)
    return console.error(err);
  console.log(docs);
});