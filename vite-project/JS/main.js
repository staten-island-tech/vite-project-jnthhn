import { products } from "./product.js";

const DOMSelectors = {
  container: document.querySelector(".container"),
  toggleButton: document.querySelector(".btn"),
  filterButtons: document.querySelectorAll(".filter-buttons button"),
};

// Theme toggle
DOMSelectors.toggleButton.addEventListener("click", function () {
  if (document.body.classList.contains("steam")) {
    document.body.classList.add("epicgames");
    document.body.classList.remove("steam");
  } else {
    document.body.classList.add("steam");
    document.body.classList.remove("epicgames");
  }
});

// Function to add a card for each product
function addCard(product) {
  const cardHTML = `
    <div class="card">
      <h4>${product.name}</h4>
      <img src="${product.image}" alt="${product.name}"></img>
      <p>Genre: ${product.genre}</p>
      <p>Price: $${product.price}</p>
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

// Event listeners for each filter button
DOMSelectors.filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.id; // Use button's ID as filter
    filterProducts(filter);
  });
});

// Function to filter products based on genre or sale status
function filterProducts(filter) {
  let filteredProducts;

  if (filter === "All") {
    filteredProducts = products; // Show all products
  } else if (filter === "On Sale") {
    filteredProducts = products.filter((product) => product.sale);
  } else {
    filteredProducts = products.filter((product) => product.genre === filter);
  }

  displayProducts(filteredProducts);
}
