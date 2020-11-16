let books = [];
let book_author;
let book_name;
let book_iframe;

class Book {
  constructor(name, author, extract) {
    this.name = name;
    this.author = author;
    this.extract = extract;
    books.push(this);
  }

  get_embeded() {
    return "https://open.spotify.com/embed/track/" + this.uri;
  }
}

function start(){
  book_author = document.querySelector("h3");
  book_name = document.querySelector("h4");
  book_extract = document.querySelector("pre");
  new_book();
}

function new_book() {
  var book = books[Math.floor(Math.random() * books.length)];
  book_author.innerText = book.author;
  book_name.innerText = book.name;
  book_extract.innerText = book.extract;
}