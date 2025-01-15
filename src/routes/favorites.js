import { favorites } from './stores';

if (typeof localStorage !== 'undefined') {
  favorites.set(JSON.parse(localStorage.getItem('favorites')) || []);
  favorites.subscribe((value) => localStorage.setItem('favorites', JSON.stringify(value)));
}