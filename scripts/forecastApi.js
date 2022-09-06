import { displayForecast } from "./displayForecast.js";
import { displayError } from "./err.js";

async function fetchForecast() {
  try {
    const api = "https://api.openweathermap.org/data/2.5/forecast?q=";
    const city = document.getElementById("location").value;
    const apiKey = "&APPID=bcf2d6ffcb93077ae5816ec9f9ba72b8";
    const units = "&units=metric";
    const url = api + city + apiKey + units;

    const response = await fetch(url);
    const data = await response.json();

    const forecast = getForecast(data);
    displayForecast(forecast);
  } catch (err) {
    displayError();
    console.log(err);
  }
}

function getForecast(data) {
  const forecast = {};
  const days = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    0: "Sunday",
  };
  let count = 0;
  const d = new Date();
  let day = d.getDay();
  for (let index = 0; index < data.list.length; index += 8) {
    forecast[count] = [
      data.city.name,
      data.list[index].main.temp,
      data.list[index].weather[0].main,
      days[day],
    ];
    count++;
    day++;
    if (day > 6) {
      day = 0;
    }
  }

  return forecast;
}

export { fetchForecast };
