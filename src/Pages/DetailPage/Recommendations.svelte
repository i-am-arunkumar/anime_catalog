<script>
  import RecommendationCard from "./RecommendationCard.svelte";
  import { getRecommendedAnimes } from "../../utils/api";
  export let id;

  let recommendations;

  $: if(id){
    getRecommendedAnimes(id).then((d) => {
      recommendations = d.data;
    });
  }
</script>

<div class="columns is-multiline">
  {#if recommendations}
    {#each recommendations as rec}
    <div class="column is-3">
      <RecommendationCard data={rec.entry} />
    </div>
    {:else}
    <div class="title">No Recommendations for this Anime</div>
    {/each}
  {:else}
    <progress class="progress is-small is-primary" max="100">15%</progress>
  {/if}
</div>
