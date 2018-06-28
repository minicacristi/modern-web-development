// Define a new component called book
Vue.component('book', {
  props: ['name', 'author', 'pages', 'date', 'isbn', 'pages'],
  template: `
    <article class="card mt-5"> 
      <section class="card-header"> 
      by {{ author }}
      </section>
      <section class="card-body">
        <h5 class="card-title text-center"> {{ name }} </h5>
        <p class="card-text"> Pages: {{ pages }} </p>
        <p class="card-text"> ISBN: {{ isbn }} </p>
      </section>
      <div class="card-footer text-muted">
        {{ date }}
      </div>
    </article>`
});

// Define a new component called book-list
Vue.component('book-list', {
  props: ['books'],
  template: `
      <div class="row">
        <book v-for="book in books" :name="book.name" :author="book.author" 
        :pages="book.pages" :date="book.date" :isbn="book.isbn"> </book>
      </div>
      `
});

const booksComp = Vue.component('books', {
  mounted: function () {
    // get books
    axios('http://localhost:3001/book').then((resp) => {
      this.books = resp.data;
    });
    // add books event handler
    this.$on('addBook', (book) => {
      axios.post('http://localhost:3001/book', {
        isbn: book.isbn,
        author: book.author,
        name: book.name,
        date: book.date,
        pages: book.pages
      }).then(() => {
        this.books.push(book);
      });
    });
  },
  data: function () {
    return {
      books: [
      ]
    };
  },
  template: `
    <article>
      <book-list :books='books'></book-list>
      <add-book></add-book>
    </article>
    `
});

// Define a new component called add-book
Vue.component('add-book', {
  data: function () {
    return {
      book: {
        name: '',
        author: '',
        pages: 0,
        date: new Date(),
        isbn: ''
      }
    };
  },
  methods: {
    addBook: function () {
      this.$parent.$emit('addBook', this.book);
    }
  },
  template: `
      <section class="card m-5">
        <div class="card-header">
          <h6>  Add another book: </h6>
        </div>
        <div class="card-body">
          <div class="form-group" >
            <label for="input-author">
              Author
            </label>
            <input v-model="book.author" class="form-control" id="input-author">
          </div>
          <div class="form-group">
            <label for="input-title">
              Name
            </label>
            <input  v-model="book.name" class="form-control" id="input-name">
          </div>
          <div class="form-group">
            <label for="input-pages">
              Pages
            </label>
            <input type='number' v-model="book.pages" class="form-control" 
            id="input-pages">
          </div>
          <div class="form-group">
            <label for="input-isbn">
              Isbn
            </label>
            <input  v-model="book.isbn" class="form-control" id="input-isbn">
          </div>
          <div class="form-group">
            <button class="btn btn-info" @click="addBook"> Add card </button>
          </div>
        </div>
      </section>`
});