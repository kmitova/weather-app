// const api = "https://api.openweathermap.org/data/2.5/weather?q=";
// const city = "sofia";
// const apiKey = "&APPID=bcf2d6ffcb93077ae5816ec9f9ba72b8";
// const units = "&units=metric";

// const url = api + city + apiKey + units;
// const location =
async function fetchWeather(location) {
  const api = "https://api.openweathermap.org/data/2.5/weather?q=";
  const city = document.getElementById("location").value;
  const apiKey = "&APPID=bcf2d6ffcb93077ae5816ec9f9ba72b8";
  const units = "&units=metric";

  const url = api + city + apiKey + units;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(data.main.feels_like);
    console.log(data.name);
    console.log(data.wind.speed);
    console.log(data.main.temp);
    console.log(data.weather[0].main);
    // return object with this info
  } catch (err) {
    console.log("Something went wrong...");
  }
}

export { fetchWeather };
