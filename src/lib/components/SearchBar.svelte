<!-- <script>
    import { searchResults } from '$lib/stores';
    import { debounce } from '$lib/utils/debounce';
  
    let query = '';
  
    const handleSearch = debounce(async () => {
      if (query.length > 2) {
        const results = await searchLocations(query); // Make sure searchLocations is defined
        searchResults.set(results);
      }
    }, 300);
</script>

<input type="text" bind:value={query} on:input={handleSearch} /> -->

<!-- lib/components/SearchBar.svelte -->
<script>
    import { searchResults, updateWeatherForecast } from '$lib/stores';
    import { debounce } from '$lib/utils/debounce';
  
    let query = '';
    let showResults = false;
  
    const handleSearch = debounce(async () => {
      if (query.length > 2) {
        await updateWeatherForecast(query); // Fetch weather data for the searched location
        showResults = true;
      } else {
        searchResults.set([]);
        showResults = false;
      }
    }, 300);
  </script>
  
  <div class="search-bar">
    <input
      type="text"
      bind:value={query}
      on:input={handleSearch}
      placeholder="Search for a destination..."
    />
  
    {#if showResults && $searchResults.length > 0}
      <div class="search-results">
        {#each $searchResults as result}
          <div
            class="search-result"
            on:click={() => {
              query = result.name;
              showResults = false;
            }}
          >
            {result.name}
          </div>
        {/each}
      </div>
    {/if}
  </div>
  
  <style>
    .search-bar {
      position: relative;
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
    }
  
    .search-results {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      z-index: 10;
    }
  
    .search-result {
      padding: 10px;
      cursor: pointer;
    }
  
    .search-result:hover {
      background: #f0f0f0;
    }
  </style>