

const searchLatt = document.querySelector(".search__latt");
const searchLong = document.querySelector(".search__long");
const searchButton = document.querySelector(".search__submit");

const response = await fetch(
  "https://www.metaweather.com/api/location/2487956/"
);
const data = await response.json();
console.log(data);
}

