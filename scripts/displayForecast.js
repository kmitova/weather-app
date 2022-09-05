function displayForecast(forecast) {
  const container = document.querySelector(".forecast-container");
  container.innerHTML = "";

  makeCard(forecast);

  console.log("works");
}

function makeCard(forecast) {
  const container = document.querySelector(".forecast-container");
  let count = 0;
  for (const item in forecast) {
    // console.log(forecast[item][0]);
    // console.log(forecast[item][1]);
    // console.log(forecast[item][2]);
    let conditions = forecast[item][2];
    console.log(conditions);

    const card = document.createElement("div");
    container.appendChild(card);
    card.innerHTML = `
      <div class="card">
        <h3 class="forecast-day">${forecast[item][3]}</h3>
        
        <p class="forecast-conditions">${forecast[item][2]}</p>
        <p class="temp-forecast">${Math.round(forecast[item][1])}°C</p>
      </div>
    `;

    let div = document.querySelectorAll(".card")[count];

    if (conditions === "Clear") {
      div.style.backgroundImage = "url('./assets/clear.gif')";
    } else if (conditions === "Clouds") {
      div.style.backgroundImage = "url('./assets/clouds.gif')";
    } else if (conditions === "Snow") {
      div.style.backgroundImage = "url('./assets/snow.gif')";
    } else if (conditions === "Rain" || conditions === "Drizzle") {
      div.style.backgroundImage = "url('./assets/rain.gif')";
    } else if (conditions === "Rain" || conditions === "Drizzle") {
      div.style.backgroundImage = "url('./assets/rain.gif')";
    } else if (weather.conditions === "Thunderstorm") {
      div.style.backgroundImage = "url('./assets/thunderstorm.gif')";
    } else {
      div.style.backgroundImage = "url('./assets/fog.gif')";
    }

    count++;
  }
}

export { displayForecast };
