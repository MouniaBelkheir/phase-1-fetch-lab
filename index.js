function fetchBooks() {
     // Make a fetch request to the Game of Thrones API
    return fetch("https://anapioficeandfire.com/api/books")
      .then((resp) => resp.json())
      .then((json) => {
        // Call the renderBooks() function with the JSON data
        renderBooks(json);
      });
  }

// The renderBooks() function is responsible for rendering the data
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

  
  // Call the fetchBooks() function when index.html is loaded
  document.addEventListener("DOMContentLoaded", function () {
    fetchBooks();
  });
  