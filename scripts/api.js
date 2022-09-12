import { displayWeather } from "./display.js";
import { displayError } from "./err.js";
import { getCoordinates } from "./times.js";

async function fetchWeather(location) {
  let isNight = false;
  const api = "https://api.openweathermap.org/data/2.5/weather?q=";
  const city = document.getElementById("location").value;
  const apiKey = "&APPID=bcf2d6ffcb93077ae5816ec9f9ba72b8";
  const units = "&units=metric";
  const url = api + city + apiKey + units;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const weather = {
      name: data.name,
      temp: Math.round(data.main.temp),
      feels: Math.round(data.main.feels_like),
      wind: data.wind.speed,
      humidity: data.main.humidity,
      conditions: data.weather[0].main,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
    };
    console.log(weather.sunrise);
    console.log(weather.sunset);
    // let isNight = false;
    const localTime = await getCoordinates(city);
    console.log(localTime);
    if (localTime >= weather.sunrise && localTime < weather.sunset) {
      console.log("day");
      isNight = false;
    } else {
      console.log("night");
      isNight = true;
    }
    console.log(isNight);
    displayWeather(weather, isNight);
  } catch (err) {
    console.log(err);
    displayError();
  }
}

export { fetchWeather };

// https://api.openweathermap.org/data/2.5/weather?q=london&APPID=bcf2d6ffcb93077ae5816ec9f9ba72b8&units=metric
