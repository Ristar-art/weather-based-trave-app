<!-- routes/+page.svelte -->
<script>
	import WeatherCard from '$lib/components/WeatherCard.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import { weatherForecast, updateWeatherForecast } from '$lib/stores';
	import { onMount } from 'svelte';
  
	onMount(async () => {
	  await updateWeatherForecast('Paris'); // Default city, you can change it dynamically
	});
  </script>
  
  <h1>Welcome to Weather Trip Planner</h1>
  <SearchBar />
  <WeatherCard weather={$weatherForecast} />
  
  {#if $weatherForecast && $weatherForecast.location}
	<a href={`/destination/${$weatherForecast.location.name.toLowerCase()}`}>
	  Travel to {$weatherForecast.location.name}
	</a>
  {/if}