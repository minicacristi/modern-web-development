class BookController {
  constructor(bookModel) {
    this.books = bookModel;
  }

  getBooks() {
    return this.books;
  }

  addBook(book) {
    this.books.push(book);
  }

  deleteBook(isbn) {
    var hasBeenFound = false;
    for (var index = 0; index < this.books.length;) {
      if (this.books[index].isbn === isbn) {
        this.books.splice(index, 1);
        hasBeenFound = true;
      } else {
        ++index;
      }
    }
    if (hasBeenFound) {
      return 204;
    } else {
      return 404;
    }
  }
}

module.exports = BookController;