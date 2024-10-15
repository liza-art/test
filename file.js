const myLibrary = [];
// array that will be holding all of the books


// object constructor for book
function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
};


// function that will add user input into array
function addBookToLibrary(title, author, pages, status){
  const newBook  =  new Book (title, author, pages, status);
  myLibrary.push(newBook);
}


//add event listener for button to submit data
document.getElementById('form').addEventListener('submit', function (event){
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const status = document.getElementById('status').value;
 
    addBookToLibrary(title, author, pages, status);
    this.reset();
    displayBooks();
});



//to show dialog icon
const dialog = document.querySelector("dialog");
document.getElementById('dialogButton').addEventListener('click', ()=>{
    dialog.showModal();



});

// to close window
document.getElementById('close').addEventListener('click', ()=>{
    dialog.close();
})

// function that will loop through the array and display the data on the page

function displayBooks(){
    
    const cardContainer  = document.getElementById('library');
        cardContainer.innerHTML = "";


   myLibrary.forEach((book, index)=>{
    const cards =document.createElement('div');
    cards.classList.add('cards');

    const titleB = document.createElement('h3');
    titleB.textContent = `Title: ${book.title}`;
    cards.appendChild(titleB);


    const authorB = document.createElement('h4');
    authorB.textContent = `Author: ${book.author}`;
    cards.appendChild(authorB);


    const pagesB = document.createElement('h5');
    pagesB.textContent = `Pages in book: ${book.pages}`;
    cards.appendChild(pagesB);


    const statusB = document.createElement('h5');
    statusB.textContent  = `Status: ${book.status}`;
    cards.appendChild(statusB);

    const removeCard = document.createElement('button');
    removeCard.textContent = "remove Card";
    removeCard.classList.add('remove');
    removeCard.addEventListener('click', function(){
        deleteCard(index);
    });

    cards.appendChild(removeCard);
    cardContainer.appendChild(cards);
   });
};

//function for removing card
function deleteCard(index){
    myLibrary.splice(index, 1);
    displayBooks();
}

