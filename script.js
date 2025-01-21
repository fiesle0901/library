
const myLibrary = []

function Book(title, author, pages, isRead){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? "already read" : "not read yet"}`;
}

function addBookToLibrary(title, author, pages, isRead){
  const book = new Book(title, author, pages, isRead);
  myLibrary.push(book);
}


const newBook = document.getElementById('newBookButton');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const addBook =  document.getElementById('addNewBook');
const form = document.querySelector('.form');
const book__container = document.querySelector('.your__collection .collection__container')



newBook.addEventListener("click", ()=>{
  modal.classList.remove("hidden");
})

closeModal.addEventListener("click", ()=>{
  modal.classList.add("hidden");
})


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.querySelector('[name="title"]').value;
  const author = document.querySelector('[name="author"]').value;
  const pages = document.querySelector('[name="pages"]').value;
  const isRead = document.querySelector('[name="isRead"]').checked;

  addBookToLibrary(title,author,pages,isRead);

  modal.classList.add('hidden');

    let book = myLibrary[myLibrary.length - 1]; 
    const stored__book = document.createElement('div');
    stored__book.classList.add('book__container');

    stored__book.innerHTML = `
    <div class="  ">
      <h3 id="title">${book.title}</h3>
      <p id="author">by ${book.author}</p>
      <p id="pages">${book.pages} pages</p>
      <p id="isRead">${book.isRead ? "already read" : "not read yet"}</p>
    </div>
  `
  book__container.appendChild(stored__book);

  form.reset();
})

