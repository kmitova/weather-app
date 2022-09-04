import { build } from "./display.js";

function displayError() {
  const displayDiv = document.querySelector(".display-weather");
  displayDiv.innerHTML = "";

  build(
    displayDiv,
    "div",
    "Something went wrong while processing your request. Please try again."
  );
}

export { displayError };
