async function getCoordinates(location) {
  const api = "http://api.openweathermap.org/geo/1.0/direct?q=";

  const apiKey = "&limit=1&appid=bcf2d6ffcb93077ae5816ec9f9ba72b8";
  const url = api + location + apiKey;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const latitude = data[0].lat;
    const longitude = data[0].lon;
    // console.log(data);
    // console.log(data[0].lat);
    // console.log(data[0].lon);
    let result = { latitude, longitude };
    // console.log(result);
    // return { latitude, longitude };
    return await getLocalTime(result);
  } catch (err) {
    console.log(err);
  }
}

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
    // console.log(data);
    const offsets = data.dstOffset * 1000 + data.rawOffset * 1000;
    const localDate = new Date(timestamp * 1000 + offsets);
    // console.log(localDate);
    // console.log(new Date());
    const unix = Math.floor(localDate.getTime() / 1000);
    // console.log(unix);
    return unix;
    // return the time
  } catch (err) {
    console.log(err);
  }
}

export { getCoordinates };
