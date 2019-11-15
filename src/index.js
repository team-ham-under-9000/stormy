import { get } from "http";

// import { getCity } from "./search";

// const searchLatt = document.querySelector(".search__latt");
// const searchLong = document.querySelector(".search__long");
// const searchButton = document.querySelector(".search__submit");

async function getCity() {
  const response = await fetch(
    "https://www.metaweather.com/api/location/2487956/"
  );
  const data = await response.json();
  console.log("nooo");
  console.log(data);
}
getCity();

// const latt =
// const url = "https://www.metaweather.com/api/location/search/?lattlong=(latt),(long)";

// https://www.metaweather.com/api/location/search/?lattlong=50.068,-5.316
