<script>
    import { favorites } from '$lib/stores';
  </script>
  
  <h1>Your Favorites</h1>
  {#each $favorites as favorite}
    <div>{favorite.name}</div>
  {/each}
  <a href="/destination/paris" sveltekit:prefetch>Paris</a>