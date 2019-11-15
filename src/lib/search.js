export async function getCity() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=37.77&lon=-122.43&appid=b12e52770a4ea6451e533761faa2e8ff"
  );
  const data = await response.json();
  return data;
}
