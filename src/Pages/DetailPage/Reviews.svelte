<script>
  import { getReview } from "../../utils/api";
  import Review from "./ReviewCard.svelte";
  export let id;
  let reviews
  
  $: if (id){
    getReview(id).then(d => {
      reviews=d.data
    })
  }

</script>
<div class="container" > 
  {#if reviews}
    {#each reviews as review }
      <Review data={review} />
    {:else}
    <section class="section">
      <h1 class="title">No Review</h1>
    </section>
    {/each}
  {:else}
    <progress class="progress is-small is-primary" max="100">15%</progress>
  {/if}
</div>