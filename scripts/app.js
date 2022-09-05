// "https://api.openweathermap.org/data/2.5/weather?q=London&APPID=bcf2d6ffcb93077ae5816ec9f9ba72b8&units=metric";
import { fetchWeather } from "./api.js";
import { fetchForecast } from "./forecastApi.js";

const location = document.getElementById("location");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  fetchWeather();
  fetchForecast();
});

// async function fetchForecast() {
//   try {
//     const api = "https://api.openweathermap.org/data/2.5/forecast?q=";
//     const city = document.getElementById("location").value;
//     const apiKey = "&APPID=bcf2d6ffcb93077ae5816ec9f9ba72b8";
//     const units = "&units=metric";
//     const url = api + city + apiKey + units;

//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data.list[0].main.temp);
//     console.log(data.list[0].weather[0].main);

//     const forecast = getForecast(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// function getForecast(data) {
//   const forecast = {};

//   let count = 0;

//   for (let index = 0; index < data.list.length; index += 8) {
//     forecast[count] = [
//       data.list[index].main.temp,
//       data.list[index].weather[0].main,
//     ];
//     console.log(data.list[index]);
//     count++;
//   }

//   console.log(forecast);

//   return forecast;
// }
