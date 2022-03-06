
<script>
    import { pagination, currentPage } from "../store/anime";
    import { nextPage,prevPage,gotoPage } from "../utils/pagination";
    import AnimeCard from "./AnimeCard.svelte";
    export let animeList
</script>

<div class="container">
    <div class="columns is-variable is-multiline">
        {#if animeList}
            {#each animeList as anime_item}
                <AnimeCard data={anime_item} />
            {:else}
            <section class="section">
                <h1 class="title">No Animes</h1>
                <h2 class="subtitle">
                  Looks like there is no animes for your query
                </h2>
              </section>
            {/each}
        {:else}
            <progress class="progress is-small is-primary" max="100">15%</progress>
        {/if}
    </div>
    {#if animeList && animeList.length !== 0 && $pagination}
        <nav class="pagination is-right my-4" role="navigation" aria-label="pagination">
            <button  on:click={prevPage} disabled={$currentPage === 1} class={`pagination-previous ${$currentPage === 1 && " is-disabled " }`}>Previous</button>
            <button disabled={$currentPage === $pagination.last_visible_page} class={`pagination-next ${$currentPage === $pagination.last_visible_page && " is-disabled " }`} on:click={nextPage}>Next page</button>
            <ul class="pagination-list">
                {#if $currentPage > 4}  
                    <li><a on:click={() => gotoPage(1)} class="pagination-link" aria-label="Goto page 1">1</a></li>
                    <li><a on:click={() => gotoPage(2)} class="pagination-link" aria-label="Goto page 1">2</a></li>
                    <li><span class="pagination-ellipsis">&hellip;</span></li>
                {/if}
                
                {#each Array($currentPage+($currentPage > 4 ? 3 : 2)).fill(0).map((_,i) => i+1).slice($currentPage > 4 ? -5 : -7) as i}
                    <li><a on:click={() => gotoPage(i)} class={`pagination-link ${$currentPage === i && "is-current"} `} aria-label="Goto page">{i}</a></li>
                {/each}
                <li><span class="pagination-ellipsis">&hellip;</span></li>
                <li><a on:click={() => gotoPage($pagination.last_visible_page)} class={`pagination-link ${$currentPage === $pagination.last_visible_page && "is-current"} `} aria-label="Goto page">{$pagination.last_visible_page}</a></li>
            </ul>
        </nav>
    {/if}       
</div>