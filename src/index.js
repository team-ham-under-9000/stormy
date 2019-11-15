import "babel-polyfill";
import { getCity } from "./lib/search";
const results = document.querySelector(".results");
const searchLatt = document.querySelector(".search__latt");
const searchLong = document.querySelector(".search__long");
const searchButton = document.querySelector(".search__submit");

searchButton.addEventListener("click", () => {
  const lattValue = searchLatt.value;
  const longValue = searchLong.value;
  getCity(lattValue, longValue).then(data => {
    const cityName = data.name;
    results.innerHTML = cityName;
  });
});
