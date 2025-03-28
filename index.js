// Function that fetches the list of books from the Game of Thrones API
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())  // Convert the response to JSON
    .then((data) => renderBooks(data));   // Pass the data to renderBooks()
}

// Function that renders the books on the page
function renderBooks(books) {
  const main = document.querySelector('main'); // Get the main element
  books.forEach(book => {
    const h2 = document.createElement('h2');  // Create a new <h2> for each book
    h2.innerHTML = book.name;  // Set the content of <h2> to the book name
    main.appendChild(h2);  // Append the <h2> to the main container
  });
}

// Wait for the DOM to load, then call fetchBooks to load and render the books
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
