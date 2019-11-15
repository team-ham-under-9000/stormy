import "babel-polyfill";
import { getCity } from "./lib/search";
import { createElements, clearResults } from "./lib/elements";
const results = document.querySelector(".results");
const searchLatt = document.querySelector(".search__latt");
const searchLong = document.querySelector(".search__long");
const searchButton = document.querySelector(".search__submit");

searchButton.addEventListener("click", () => {
  clearResults(results);
  const lattValue = searchLatt.value;
  const longValue = searchLong.value;
  getCity(lattValue, longValue).then(data => {
    const cityName = data.name;
    const cityWindSpeed = data.wind.speed;
    const cityWindDeg = data.wind.deg;
    const cityTemperatureFahrenheit = data.main.temp;
    const cityTemperature = Math.floor(cityTemperatureFahrenheit - 273.15);
    const iconID = data.weather[0].icon;
    const iconURL = `http://openweathermap.org/img/wn/${iconID}.png`;
    const nameResult = createElements("name");
    const temperatureResult = createElements("temperature");
    const iconResult = createElements("icon");
    const windSpeedResult = createElements("wind-speed");
    const windDegResult = createElements("wind-deg");
    results.appendChild(nameResult);
    results.appendChild(temperatureResult);
    results.appendChild(iconResult);
    results.appendChild(windSpeedResult);
    results.appendChild(windDegResult);
    nameResult.innerHTML = cityName;
    temperatureResult.innerHTML = cityTemperature;
    iconResult.innerHTML = `<img src="${iconURL}"></img>`;
    windSpeedResult.innerHTML = cityWindSpeed;
    windDegResult.innerHTML = cityWindDeg;
  });
});
