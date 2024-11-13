import { products } from "./product.js";

const DOMSelectors = {
  container: document.querySelector(".container"),
  toggleButton: document.querySelector(".btn"),
  filterButtons: document.querySelectorAll(".filter-buttons button"),
};

DOMSelectors.toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("steam");
  document.body.classList.toggle("epicgames");

  // Set CSS variables based on the theme
  if (document.body.classList.contains("epicgames")) {
    document.documentElement.style.setProperty(
      "--primary",
      "var(--epic-black)"
    );
    document.documentElement.style.setProperty("--secondary", "var(--white)");
  } else {
    document.documentElement.style.setProperty(
      "--primary",
      "var(--steam-black)"
    );
    document.documentElement.style.setProperty(
      "--secondary",
      "var(--midnight-blue)"
    );
  }
});

function addCard(product) {
  const cardHTML = `
    <div class="card">
      <h4>${product.name}</h4>
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
    const filter = button.getAttribute("data-filter");
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
