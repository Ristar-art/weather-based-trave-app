<!-- routes/destination/[id]/+page.svelte -->
<script>
    import { weatherForecast, updateWeatherForecast } from '$lib/stores';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import WeatherCard from '$lib/components/WeatherCard.svelte';
    import Map from '$lib/components/Map.svelte'; // Import the Map component
  
    let destination = $page.params.id;
  
    onMount(async () => {
      try {
        await updateWeatherForecast(destination);
        // Log the coordinates after updating the weather forecast
        if ($weatherForecast && $weatherForecast.location) {
          const { lat, lon } = $weatherForecast.location;
          console.log(`Coordinates for destination ${destination}:`, { lat, lon });
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    });
  </script>
  
  <h1>Destination: {destination}</h1>
  <WeatherCard weather={$weatherForecast} />
  
  {#if $weatherForecast && $weatherForecast.location}
    <Map lat={$weatherForecast.location.lat} lon={$weatherForecast.location.lon} />
  {/if}
  <!-- <Map lat={40.7128} lon={-74.0060} /> -->