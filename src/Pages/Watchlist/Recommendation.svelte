<script>
    import RecommendationCard from "../DetailPage/RecommendationCard.svelte";
    import { searchAnime } from "../../utils/api";
    import { onMount } from "svelte";

    let genres = new Set();

    export let userdata = [];

    let data

    onMount(() => {
        userdata.forEach((anime) => {
            anime.genres.forEach((gen) => {
                genres.add(gen.mal_id);
            });
        });
        let genreq = []
        let genreList = Array.from(genres)
        
        Array(3).fill(1).forEach( e => {
            genreq.push(genreList[Math.floor(Math.random() * genreList.length)])
        })

        searchAnime({
            q: "",
            sort : 'desc',
            order_by : "score",
            genres: genreq.join(",")
        }).then(d => {
            data = d.data
        });
    });
</script>

<div class="columns is-multiline">
    {#if data}
        {#each data as rec}
            <div class="column is-3">
                <!-- {JSON.stringify(rec)} -->
                <RecommendationCard data={rec} />
            </div>
        {:else}
            <div class="title mx-4">No Recommendations for this Anime</div>
        {/each}
    {:else}
        <progress class="progress is-small is-primary" max="100">15%</progress>
    {/if}
</div>
