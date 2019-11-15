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
    const cityTemperature = data.main.temp;
    // const cityTemperature = (cityTemperatureFahrenheit - 32) / 1.8;
    const nameResult = createElements("name");
    const temperatureResult = createElements("temperatur");
    results.appendChild(nameResult);
    results.appendChild(temperatureResult);
    nameResult.innerHTML = cityName;
    temperatureResult.innerHTML = cityTemperature;
  });
});
