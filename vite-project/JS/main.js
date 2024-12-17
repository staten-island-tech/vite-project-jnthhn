import { products } from "./product.js";
import "../css/style.css";

const DOMSelectors = {
  container: document.querySelector(".container"),
  toggleButton: document.querySelector(".btn"),
  filterButtons: document.querySelectorAll(".filter-buttons button"),
};

DOMSelectors.toggleButton.addEventListener("click", function () {
  if (document.body.classList.contains("steam")) {
    document.body.classList.add("epicgames");
    document.body.classList.remove("steam");
  } else {
    document.body.classList.add("steam");
    document.body.classList.remove("epicgames");
  }
});

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

function displayProducts(productList) {
  DOMSelectors.container.innerHTML = "";
  productList.forEach((product) => addCard(product));
}

displayProducts(products);

DOMSelectors.filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.id;
    filterProducts(filter);
  });
});

function filterProducts(filter) {
  let filteredProducts;

  if (filter === "All") {
    filteredProducts = products;
  } else if (filter === "On Sale") {
    filteredProducts = products.filter((product) => product.sale);
  } else {
    filteredProducts = products.filter((product) => product.genre === filter);
  }

  displayProducts(filteredProducts);
}
