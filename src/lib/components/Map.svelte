<!-- lib/components/Map.svelte -->
<script>
    import { onMount, onDestroy } from 'svelte';
    import { loadMapTilerScript, initializeMap } from '$lib/services/maps';
  
    export let lat = 0;
    export let lon = 0;
  
    let mapContainer;
    let map;
  
    onMount(async () => {
      try {
        await loadMapTilerScript();
        map = initializeMap(lat, lon);
  
        // Add a marker at the specified location
        const marker = new maplibregl.Marker()
          .setLngLat([lon, lat])
          .addTo(map);
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    });
  
    onDestroy(() => {
      if (map) {
        map.remove();
      }
    });
  </script>
  
  <div bind:this={mapContainer} id="map" class="w-full h-96 rounded-lg shadow-lg"/>
  
  <style>
    #map {
      min-height: 400px;
    }
  </style>