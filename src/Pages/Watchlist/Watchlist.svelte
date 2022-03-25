<script>
	import AnimeGrid from "../../SharedComponents/AnimeGrid.svelte";
	 import Recommendations from "./Recommendation.svelte"
	import { getWatchListData } from "../../utils/database";
	import { getAuth } from "firebase/auth";
	import { onMount } from "svelte";
	import {currentPage } from "../../store/anime";

	const auth = getAuth();
	let userdata 

	onMount(() => {
		const user = auth.currentUser;
		currentPage.set(1);
		getWatchListData(user.uid).then((d) => {
			if(d){
				userdata = Object.values(d).map((a, i) => ({
				...a,
				}))
			}else{
				userdata = []
			}
			
		});
	});


	let selected_index = 0;
	let tabs = ["Watchlist", "Recommendation"];
	function selectTab(i) {
    selected_index = i;
  }
</script>

<div class="column mt-4 left-container">
	<div class="tabs is-boxed">
	  <ul>
		{#each tabs as tab, i}
		  <li class={i === selected_index ? "is-active" : ""}>
			<a on:click={() => selectTab(i)}>
			  <span>{tab}</span>
			</a>
		  </li>
		{/each}
	  </ul>
	</div>
	
	{#if selected_index === 0}
	<AnimeGrid animeList={userdata} />
  {:else if selected_index === 1}
	<Recommendations userdata={userdata} />
  {/if}
</div>

