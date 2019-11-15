export async function getCity(latt, long) {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
      latt +
      "&lon=" +
      long +
      "&appid=b12e52770a4ea6451e533761faa2e8ff"
  );
  const data = await response.json();
  return data;
}
