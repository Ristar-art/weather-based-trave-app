<!-- lib/components/WeatherCard.svelte -->
<script>
    export let weather;
  
    console.log('weather is ', weather);
  </script>
  
  <div class="weather-card">
    {#if weather && weather.location && weather.current}
      <h2>{weather.location.name}</h2>
      <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
      <p>{weather.current.temp_c}°C</p>
    {:else}
      <p>No weather data available</p>
    {/if}
  </div>