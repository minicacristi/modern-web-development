class AuthorController {
  constructor(bookModel) {
    this.books = bookModel;
  }
  getAuthors() {
    var authors = [];
    for (var book of this.books) {
      if (!authors.includes(book.author))
        authors.push(book.author);
    }
    return authors;
  }
}

module.exports = AuthorController;