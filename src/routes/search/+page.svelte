<script>
	import WeatherCard from '$lib/components/WeatherCard.svelte';
	import { weatherForecast } from '$lib/stores';
  </script>
  
  <h1>Welcome to Weather Trip Planner</h1>
  <WeatherCard {weatherForecast} />
  <a href="/destination/paris" sveltekit:prefetch>Paris</a>
