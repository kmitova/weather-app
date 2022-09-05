function displayForecast(forecast) {
  const container = document.querySelector(".swiper-wrapper");
  container.innerHTML = "";

  makeCard(forecast);

  console.log("works");
}

function makeCard(forecast) {
  const container = document.querySelector(".swiper-wrapper");
  let count = 0;
  for (const item in forecast) {
    // console.log(forecast[item][0]);
    // console.log(forecast[item][1]);
    // console.log(forecast[item][2]);
    let conditions = forecast[item][2];
    console.log(conditions);

    const card = document.createElement("div");
    container.appendChild(card);
    card.classList.add("swiper-slide");
    card.innerHTML = `
      
        <h3 class="forecast-day">${forecast[item][3]}</h3>
        
        <p class="forecast-conditions">${forecast[item][2]}</p>
        <p class="temp-forecast">${Math.round(forecast[item][1])}°C</p>
      
    `;

    let div = document.querySelectorAll(".swiper-slide")[count];

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

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
}

export { displayForecast };
