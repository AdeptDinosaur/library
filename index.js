let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}

function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    let volume = new Book(title, author, pages, read);
    myLibrary.push(volume);
}

//const submit = document
