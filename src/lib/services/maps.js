const mapAPI = import.meta.env.VITE_MAPTILER_API_KEY;

export function loadMapTilerScript() {
  return new Promise((resolve) => {
    if (window.maplibregl) {
      resolve();
      return;
    }

    // Load MapLibre GL JS script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.js';
    script.onload = resolve;
    document.head.appendChild(script);

    // Load MapLibre GL CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.css';
    document.head.appendChild(link);
  });
}

export function initializeMap(lat, lon) {
    console.log('lat is ', lat);
    return new maplibregl.Map({
      container: 'map',
      center: [lon, lat],
      zoom: 12,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${mapAPI}`,
    });
}