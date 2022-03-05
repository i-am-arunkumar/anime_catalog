<script>
    import { onMount } from "svelte";
    import RecCard from "./RecommendationCard.svelte";
    import { getRecommendedAnimes } from "../../utils/api";
    let recommendations
    onMount(()=>{
        getRecommendedAnimes().then(res => {
            recommendations = res.data
        })
    })
</script>
<div>
    {#if recommendations}
    {#each recommendations as recommendation }
        <div class="m-4">
            <div class="title is-5" >{recommendation.content}</div>
            <div class="columns">
                {#each recommendation.entry as entry }
                    <div class="column is-2">
                        <RecCard data={entry} />
                    </div>
                {/each}
            </div>
        </div>
    {/each}
    {:else}
    <progress class="progress is-small is-primary" max="100">15%</progress>
    {/if}
</div>