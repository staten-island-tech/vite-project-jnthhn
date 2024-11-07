import "../styles/style.css";

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("steam")) {
    document.body.classList.add("epicgames");
    document.body.classList.remove("steam");
  } else {
    document.body.classList.add("steam");
    document.body.classList.remove("epicgames");
  }
});
