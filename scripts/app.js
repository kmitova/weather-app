import { fetchWeather } from "./api.js";
import { fetchForecast } from "./forecastApi.js";
// import { getCoordinates } from "./times.js";

const location = document.getElementById("location");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  fetchWeather();
  fetchForecast();
  // getCoordinates(location.value);
});
