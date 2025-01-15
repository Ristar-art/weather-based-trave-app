// lib/stores.js
import { writable } from 'svelte/store';
import { getWeather, searchLocations } from '$lib/services/weather';

export const favorites = writable([]);
export const searchResults = writable([]);
export const weatherForecast = writable(null);

export async function updateWeatherForecast(city) {
  try {
    const weatherData = await getWeather(city);
    weatherForecast.set(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    weatherForecast.set(null);
  }
}

export async function updateSearchResults(query) {
  try {
    const results = await searchLocations(query);
    searchResults.set(results);
  } catch (error) {
    console.error('Error fetching search results:', error);
    searchResults.set([]);
  }
}

if (typeof localStorage !== 'undefined') {
  favorites.set(JSON.parse(localStorage.getItem('favorites')) || []);
  favorites.subscribe((value) => localStorage.setItem('favorites', JSON.stringify(value)));
}