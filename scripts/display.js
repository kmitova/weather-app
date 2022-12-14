function displayWeather(weather, isNight) {
  const displayDiv = document.querySelector(".display-weather");
  displayDiv.innerHTML = "";
  const body = document.getElementsByTagName("body")[0];
  console.log(isNight);
  if (isNight) {
    body.style.backgroundColor = "#1d3557";
    document.getElementById("title").style.color = "white";
  } else {
    body.style.backgroundColor = "#caf0f8";
    document.getElementById("title").style.color = "#184e77";
  }

  let checkbox = document.querySelector("input[type='checkbox']");

  if (weather.conditions === "Clear") {
    if (isNight) {
      displayDiv.style.backgroundImage = "url('./assets/nightClear.gif')";
    } else {
      displayDiv.style.backgroundImage = "url('./assets/clear.gif')";
    }
  } else if (weather.conditions === "Clouds") {
    if (isNight) {
      displayDiv.style.backgroundImage = "url('./assets/nightClouds.gif')";
    } else {
      displayDiv.style.backgroundImage = "url('./assets/clouds.gif')";
    }
  } else if (weather.conditions === "Snow") {
    if (isNight) {
      displayDiv.style.backgroundImage = "url('./assets/nightSnow.gif')";
    } else {
      displayDiv.style.backgroundImage = "url('./assets/snow.gif')";
    }
  } else if (
    weather.conditions === "Rain" ||
    weather.conditions === "Drizzle"
  ) {
    if (isNight) {
      displayDiv.style.backgroundImage = "url('./assets/NightRain.gif')";
    } else {
      displayDiv.style.backgroundImage = "url('./assets/rain.gif')";
    }
    // } else if (
    //   weather.conditions === "Rain" ||
    //   weather.conditions === "Drizzle"
    // ) {
    //   displayDiv.style.backgroundImage = "url('./assets/rain.gif')";
  } else if (weather.conditions === "Thunderstorm") {
    if (isNight) {
      displayDiv.style.backgroundImage = "url('./assets/nightStorm.gif')";
    } else {
      displayDiv.style.backgroundImage = "url('./assets/thunderstorm.gif')";
    }
  } else {
    displayDiv.style.backgroundImage = "url('./assets/fog.gif')";
  }

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

  if (checkbox.checked) {
    build(tempDiv, "p", `${weather.temp}??C`);
  } else {
    build(tempDiv, "p", `${Math.round((weather.temp * 9) / 5 + 32)}??F`);
  }

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info-div");
  lowerDiv.appendChild(infoDiv);

  const list = document.createElement("ul");
  list.classList.add("more-info-list");
  infoDiv.appendChild(list);

  if (checkbox.checked) {
    build(list, "li", `Feels like: ${weather.feels}??C`);
    build(list, "li", `Wind: ${weather.wind} km/h`);
  } else {
    build(
      list,
      "li",
      `Feels like: ${Math.round((weather.feels * 9) / 5 + 32)}??F`
    );
    build(list, "li", `Wind: ${(weather.wind / 1.609344).toFixed(2)} mph`);
  }
  build(list, "li", `Humidity: ${weather.humidity}%`);
}

function build(location, type, content) {
  const el = document.createElement(type);
  location.appendChild(el);
  el.textContent = content;
}

export { displayWeather, build };
