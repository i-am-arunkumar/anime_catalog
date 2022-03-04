<script>
	import { onMount } from "svelte";
	import { getTopAnimes } from "../../utils/api";
	import { data } from "./data";
	import AnimeGrid from "../../SharedComponents/AnimeGrid.svelte";
	import Transition from "../../SharedComponents/Transition.svelte";

	let animes;
	onMount(() => {
		animes = data;
		// getTopAnimes().then(res => {
		// 	animes = res.data
		// })
	});
</script>

<Transition>
	<AnimeGrid  animeList={animes} />
</Transition>


