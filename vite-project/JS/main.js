// main.js
import { products } from "./product.js"; // Importing the product data

const DOMSelectors = {
  container: document.querySelector(".container"),
  toggleButton: document.querySelector(".btn"),
  filterButtons: document.querySelector(".filter-buttons"),
};

// Theme toggle logic
DOMSelectors.toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("steam");
  document.body.classList.toggle("epicgames");
});

// Function to create a card for each product
function addCard(product) {
  const cardHTML = `
    <div class="card">
      <h4>${product.name}</h4>
      <p>Genre: ${product.genre}</p>
      <p>Price: $${product.price.toFixed(2)}</p>
      <p>Publisher: ${product.publisher}</p>
      <p>Release Date: ${product.releaseDate}</p>
      <p>${product.sale ? "On Sale!" : ""}</p>
    </div>`;
  DOMSelectors.container.insertAdjacentHTML("beforeend", cardHTML);
}

// Display all products
function displayProducts(productList) {
  DOMSelectors.container.innerHTML = ""; // Clear previous cards
  productList.forEach((product) => addCard(product)); // Add each product as a card
}

// Initial display of all products
displayProducts(products);

// Function to add filter buttons for genres and sale status
function addFilterButtons() {
  const genres = [...new Set(products.map((product) => product.genre))]; // Unique genres
  genres.forEach((genre) => {
    const button = document.createElement("button");
    button.textContent = genre;
    button.addEventListener("click", function () {
      filterProductsByGenre(genre);
    });
    DOMSelectors.filterButtons.appendChild(button);
  });

  // Sale filter button
  const saleButton = document.createElement("button");
  saleButton.textContent = "On Sale";
  saleButton.addEventListener("click", function () {
    filterProductsBySale();
  });
  DOMSelectors.filterButtons.appendChild(saleButton);
}

// Filter products by genre and display them
function filterProductsByGenre(genre) {
  const filteredProducts = products.filter(
    (product) => product.genre === genre
  );
  displayProducts(filteredProducts);
}

// Filter products by sale status and display them
function filterProductsBySale() {
  const filteredProducts = products.filter((product) => product.sale === true);
  displayProducts(filteredProducts);
}

// Add filter buttons for genres and sale status
addFilterButtons();
