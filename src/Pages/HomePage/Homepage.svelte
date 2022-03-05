<script>
	import { navigate } from 'svelte-routing';
	import { onMount } from "svelte";
	import { animeList, current_filter } from "../../store/anime";
	import { setFilter } from "../../utils/filter_utils";
	import AnimeGrid from "../../SharedComponents/AnimeGrid.svelte";
	import Transition from "../../SharedComponents/Transition.svelte";
	import FilterPanel from "./FilterPanel.svelte";

	onMount(() => {

		if($current_filter.id === "recommendations"){
			navigate("/recommendations")
			return
		}

		if (!$animeList) setFilter($current_filter.id, $current_filter.params);
		window.scrollTo(0, 0);
	});

	let show_filter = false;

	function toggleFilter() {
		window.scrollTo(0, 0);
		show_filter = !show_filter;
	}
</script>

<Transition>
	<div class="root">
		{#if show_filter}
			<FilterPanel close={toggleFilter} />
		{:else}
			<button class="button filter" on:click={toggleFilter}>
				<span class="icon is-small">
					<i class="gg-sort-az" />
				</span>
			</button>
		{/if}
		<AnimeGrid animeList={$animeList} />
	</div>
</Transition>

<style>
	.filter {
		position: fixed;
		margin-left: 8px;
		z-index: 100;
	}
	.root {
		display: flex;
	}
</style>
