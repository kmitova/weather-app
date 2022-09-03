// "https://api.openweathermap.org/data/2.5/weather?q=London&APPID=bcf2d6ffcb93077ae5816ec9f9ba72b8&units=metric";
import { fetchWeather } from "./api.js";
console.log("hello");

const location = document.getElementById("location");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  console.log(location.value);
  fetchWeather();
});

// async function fetchWeather() {
//   try {
//     const response = await fetch(
//       "https://api.openweathermap.org/data/2.5/weather?q=London&APPID=bcf2d6ffcb93077ae5816ec9f9ba72b8&units=metric"
//     );
//     const data = await response.json();
//     console.log(data);
//     console.log(data.main.feels_like);
//     console.log(data.name);
//     console.log(data.wind.speed);
//     console.log(data.main.temp);
//     console.log(data.weather[0].main);
//   } catch (err) {
//     console.log("Something went wrong...");
//   }
// }
