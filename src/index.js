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
    const cityTemperatureFahrenheit = data.main.temp;
    const cityTemperature = Math.floor(cityTemperatureFahrenheit - 273.15);
    const iconID = data.weather[0].icon;
    console.error(data.weather[0].icon);
    const iconURL = `http://openweathermap.org/img/wn/${iconID}.png`;
    const nameResult = createElements("name");
    const temperatureResult = createElements("temperatur");
    const iconResult = createElements("icon");
    results.appendChild(nameResult);
    results.appendChild(temperatureResult);
    results.appendChild(iconResult);
    nameResult.innerHTML = cityName;
    temperatureResult.innerHTML = cityTemperature;
    iconResult.innerHTML = `<img src="${iconURL}"></img>`;
  });
});
