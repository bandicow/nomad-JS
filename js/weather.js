/**OpenWeather Key */
const API_KEY = "90c6638ff1d4a1329c58cf2f1befc055";

/** 성공시 위치정보 */
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const temp = document.querySelector("#weather span:nth-child(2)");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = parseInt(data.main.temp) + "도";
    });
}

/**에러날시 경고창 */
function onGeoerror() {
  alert("Oops! Can't find you. No weather for you.");
}

/** 브라우저에 위치표시 와이파이 위치 gps 등 */
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoerror);
