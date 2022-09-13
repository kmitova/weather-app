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
    console.log("Sunrise: " + weather.sunrise);
    console.log("Sunset: " + weather.sunset);
    // let isNight = false;
    const localTime = await getCoordinates(city);
    // console.log("Current: " + localTime);
    // console.log(new Date(weather.sunrise * 1000));
    // console.log(new Date(weather.sunset * 1000));
    // console.log(new Date(localTime * 1000));

    if (localTime < weather.sunset && localTime > weather.sunrise) {
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
