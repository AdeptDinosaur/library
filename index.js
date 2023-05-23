let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}

function addBookToLibrary(event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let volume = new Book(title, author, pages, read);
    myLibrary.push(volume);

    displayBooks();

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
}

function displayBooks() {
    let cardContainer = document.querySelector(".cardContainer");
    cardContainer.innerHTML = ""; 

    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];

        let card = document.createElement("div");
        card.classList.add("card");

        let title = document.createElement("h2");
        title.textContent = book.title;

        let author = document.createElement("p");
        author.textContent = "Author: " + book.author;

        let pages = document.createElement("p");
        pages.textContent = "Pages: " + book.pages;

        let read = document.createElement("p");
        read.textContent = book.read ? "Read" : "Not Read";

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            removeBookFromLibrary(i);
            displayBooks();
        });

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(deleteButton);

        cardContainer.appendChild(card)
    }
}

function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1);
}


document.getElementById("addBook").addEventListener("click", addBookToLibrary); 

