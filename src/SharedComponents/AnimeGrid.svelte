
<script>
    import AnimeCard from "./AnimeCard.svelte";
    export let animeList
</script>

<div class="container">
    <div class="columns is-variable is-multiline">
        {#if animeList}
            {#each animeList as anime_item}
                <AnimeCard data={anime_item} />
            {/each}
        {:else}
            <progress class="progress is-small is-primary" max="100">15%</progress>
        {/if}
    </div>
</div>