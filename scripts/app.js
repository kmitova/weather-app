import { fetchWeather } from "./api.js";
import { fetchForecast } from "./forecastApi.js";

const location = document.getElementById("location");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  fetchWeather();
  fetchForecast();
});

// let result = fetch(
//   "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=bcf2d6ffcb93077ae5816ec9f9ba72b8"
// );

// console.log(result);

// async function getCoordinates() {
//   try {
//     const response = await fetch(
//       "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=bcf2d6ffcb93077ae5816ec9f9ba72b8"
//     );
//     const data = await response.json();
//     console.log(data);
//     console.log(data[0].lat);
//     console.log(data[0].lon);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getCoordinates();
