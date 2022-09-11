// 1. get coordinates from openweathermap

async function getCoordinates(location) {
  const api = "http://api.openweathermap.org/geo/1.0/direct?q=";

  const apiKey = "&limit=1&appid=bcf2d6ffcb93077ae5816ec9f9ba72b8";
  const url = api + location + apiKey;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const latitude = data[0].lat;
    const longitude = data[0].lon;
    console.log(data);
    // console.log(data[0].lat);
    // console.log(data[0].lon);
    let result = { latitude, longitude };
    console.log(result);
    // return { latitude, longitude };
    getLocalTime(result);
  } catch (err) {
    console.log(err);
  }
}

// const coordinates = getCoordinates("London");
// console.log(coordinates);

async function getLocalTime(coordinates) {
  const api = "https://maps.googleapis.com/maps/api/timezone/json?location=";
  const loc = `${coordinates.latitude}, ${coordinates.longitude}`;
  let targetDate = new Date();
  let timestamp =
    targetDate.getTime() / 1000 + targetDate.getTimezoneOffset() * 60;
  const api_key = "";
  const url = api + loc + "&timestamp=" + timestamp + "&key=" + api_key;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const offsets = data.dstOffset * 1000 + data.rawOffset * 1000;
    const localDate = new Date(timestamp * 1000 + offsets);
    console.log(localDate.toLocaleString());
  } catch (err) {
    console.log(err);
  }
}

// getLocalTime(coordinates);

// 2. use coordinates with google api key to get time
// 3. use the response to calculate local time
// 4. calculate sunset and sunrise times from the openweathermap api call (the one that fetches the weather)
// 5. if after sunset: dark mode, if after sunrise: light mode

export { getCoordinates };
