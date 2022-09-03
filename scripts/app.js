// "https://api.openweathermap.org/data/2.5/weather?q=London&APPID=bcf2d6ffcb93077ae5816ec9f9ba72b8&units=metric";

console.log("hello");

// async function fetchGif() {
//   try {
//     const response = await fetch(
//       "https://api.giphy.com/v1/gifs/translate?api_key=RvEtJnWlX64QRmAJqVxJ7cAS2eSQmtMO&s=bts3"
//     );
//     const btsData = await response.json();
//     img.src = btsData.data.images.original.url;
//   } catch (err) {
//     img.src = "./not-found.jpeg";
//   }
// }

async function fetchWeather() {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London&APPID=bcf2d6ffcb93077ae5816ec9f9ba72b8&units=metric"
    );
    const data = await response.json();
    console.log(data);
    console.log(data.main.feels_like);
    console.log(data.name);
    console.log(data.wind.speed);
    console.log(data.main.temp);
  } catch (err) {
    console.log("Something went wrong...");
  }
}

fetchWeather();
