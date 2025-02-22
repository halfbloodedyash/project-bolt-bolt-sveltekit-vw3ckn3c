import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const defaultValue = browser ? window.localStorage.getItem('theme') || 'light' : 'light';
export const theme = writable(defaultValue);

theme.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('theme', value);
    document.documentElement.setAttribute('data-theme', value);
  }
});