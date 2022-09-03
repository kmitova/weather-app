function displayWeather(weather) {
  const displayDiv = document.querySelector(".display-weather");
  displayDiv.innerHTML = "";

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title");
  displayDiv.appendChild(titleDiv);

  build(titleDiv, "h1", weather.name);
  build(titleDiv, "p", weather.conditions);

  const lowerDiv = document.createElement("div");
  lowerDiv.classList.add("lower-div");
  displayDiv.appendChild(lowerDiv);
  const tempDiv = document.createElement("div");
  tempDiv.classList.add("temp");
  lowerDiv.appendChild(tempDiv);

  build(tempDiv, "p", weather.temp);

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info-div");
  lowerDiv.appendChild(infoDiv);

  const list = document.createElement("ul");
  list.classList.add("more-info-list");
  infoDiv.appendChild(list);

  build(list, "li", weather.feels);
  build(list, "li", weather.wind);
  build(list, "li", weather.humidity);
}

function build(location, type, content) {
  const el = document.createElement(type);
  location.appendChild(el);
  el.textContent = content;
}

export { displayWeather };
