// services/weather.js
// const weatherAPI = import.meta.env.VITE_WEATHER_API_KEY;

// export async function getWeather(city) {
//   const response = await fetch(
//     `https://api.weatherapi.com/v1/current.json?key=${weatherAPI}&q=${city}`
//   );
//   if (!response.ok) throw new Error('Failed to fetch weather data');
//   return response.json();
// }
// services/weather.js
const weatherAPI = import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeather(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${weatherAPI}&q=${city}`
  );
  if (!response.ok) throw new Error('Failed to fetch weather data');
  return response.json();
}

export async function searchLocations(query) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/search.json?key=${weatherAPI}&q=${query}`
  );
  if (!response.ok) throw new Error('Failed to fetch search results');
  return response.json();
}