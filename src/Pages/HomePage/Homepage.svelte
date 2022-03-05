<script>
	import { onMount } from "svelte";
	import { data } from "./data";
	import { animeList, current_filter } from "../../store/anime";
	import { setFilter } from "../../utils/filter_utils";
	import AnimeGrid from "../../SharedComponents/AnimeGrid.svelte";
	import Transition from "../../SharedComponents/Transition.svelte";
	import FilterPanel from "./FilterPanel.svelte";

	onMount(() => {
		if(!$animeList)
			setFilter($current_filter.id, $current_filter.params);
		window.scrollTo(0, 0);
	});
</script>

<Transition>
	<div class="root">
		<!-- <FilterPanel /> -->
		<AnimeGrid animeList={$animeList} />
	</div>
</Transition>

<style>
	.root {
		display: flex;
	}
</style>
