import { build } from "./display.js";

function displayError() {
  const displayDiv = document.querySelector(".display-weather");
  displayDiv.innerHTML = "";
  displayDiv.style.background = "";
  displayDiv.style.boxShadow = "none";

  build(
    displayDiv,
    "div",
    "Something went wrong while processing your request. Please try again."
  );

  const container = document.querySelector(".container");
  container.style.display = "none";
  const h5 = document.querySelector("h5");
  h5.style.display = "none";
}

export { displayError };
