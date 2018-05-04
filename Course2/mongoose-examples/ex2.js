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

// run a query on the model
Book.find({ author: 'John Doe' }, (err, docs) => {
  if (err)
    return console.error(err);
  console.log(docs);
});

Book.find({ name: 'Book of rings' }, (err, docs) => {
  if (err)
    return console.error(err);
  console.log(docs);
});

Book.find({ name: 'Book of rings', author: 'John Doe' }, (err, docs) => {
  if (err)
    return console.error(err);
  console.log(docs);
});

Book.find({ pages: { $gte: 200 } }, (err, docs) => {
  if (err)
    return console.error(err);
  console.log(docs);
});

Book.find({ tags: 'ring' }, (err, docs) => {
  if (err)
    return console.error(err);
  console.log(docs);
});

Book.find({ tags: { $all: ['page', 'sequel'] } }, (err, docs) => {
  if (err)
    return console.error(err);
  console.log(docs);
});

Book.find({ tags: { $size: 2 } }, (err, docs) => {
  if (err)
    return console.error(err);
  console.log(docs);
});