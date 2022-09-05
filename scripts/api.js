import { displayWeather } from "./display.js";
import { displayError } from "./err.js";

async function fetchWeather(location) {
  const api = "https://api.openweathermap.org/data/2.5/weather?q=";
  const city = document.getElementById("location").value;
  const apiKey = "&APPID=bcf2d6ffcb93077ae5816ec9f9ba72b8";
  const units = "&units=metric";
  const url = api + city + apiKey + units;
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    const weather = {
      name: data.name,
      temp: Math.round(data.main.temp),
      feels: Math.round(data.main.feels_like),
      wind: data.wind.speed,
      humidity: data.main.humidity,
      conditions: data.weather[0].main,
    };
    // console.log(weather);
    displayWeather(weather);
  } catch (err) {
    console.log(err);
    displayError();
  }
}

export { fetchWeather };
