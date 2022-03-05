import { writable } from 'svelte/store';

export const selectedAnime = writable(0);

export const animeList = writable(null);

export const currentPage = writable(0);

export const current_filter = writable({ id: "top" });


