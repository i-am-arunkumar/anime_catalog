<script>
    import { fly } from "svelte/transition";
    import { genres } from "../../utils/endpoint_maps";
    import { setFilter } from "../../utils/filter_utils";

    export let close;

    let genre_list = genres.data;

    let selected_genres = [];

    let type;
    let status;
    let orderBy;
    let sort_asc = false;

    let query = "";

    let types = [{name : "TV", id : "tv"}, {name : "Movie", id: "movie"}]
    let statuses = [ { name : "Airing", id : "airing"}, { name : "Upcoming", id : "upcoming"},{ name : "Completed", id : "completed"}] 

    function toggleType(e) {
        type = e.target.id
    }

    function toggleStatus(e) {
        status = e.target.id
    }

    function toggleGenre(e) {
        let index = selected_genres.indexOf(e.target.id);
        if (index != -1) {
            selected_genres.splice(index, 1);
        } else {
            selected_genres.push(e.target.id);
        }
        console.log(selected_genres);
    }

    function apply() {
        setFilter("search", {
            q: query,
            genres: selected_genres.join(","),
            type,
            status,
            order_by : orderBy === "" ? undefined : orderBy,
            sort : sort_asc ? "asc" :"desc",    
        });
    }

    function clear() {
        query = "";
        status = null;
        type = null;
        orderBy = null;
        selected_genres = [];
        document.querySelectorAll("#type *:checked").forEach((e) => {
            e.checked = false;
        });
        document.querySelectorAll("#status *:checked").forEach((e) => {
            e.checked = false;
        });
        document.querySelectorAll("#genre_list *:checked").forEach((e) => {
            e.checked = false;
        });
    }
</script>

<nav transition:fly={{ x: -270, opacity: 1 }} class="panel mr-4">
    <p class="has-text-white has-background-dark panel-heading">
        <span class="level">
            <span class="level-left"> Filters </span>
            <button on:click={close} class="level-right delete is-medium" />
        </span>
    </p>
    <div class="panel-block">
        <div class="field has-addons">
            <p class="control has-icons-left ">
                <input
                    bind:value={query}
                    class="input"
                    type="text"
                    placeholder="Search"
                />
                <span class="icon is-left">
                    <i class="gg-search" />
                </span>
            </p>
        </div>
    </div>
    <div class="panel-block">
        <div class="control is-size-7 has-addons" id="status">
            {#each statuses as {name,id} }
                <label class="radio">
                    <input id={id} type="radio" name="status" on:change={toggleStatus}/>
                    {name}
                </label>
            {/each}
        </div>
    </div>
    <div class="panel-block">
        <div class="control is-size-7 has-addons" id="type">
            {#each types as {name,id} }
                <label class="radio">
                    <input id={id} type="radio" name="type" on:change={toggleType}/>
                    {name}
                </label>
            {/each}
        </div>
    </div>
    <div class="panel-block is-flex" >
        <div class="select is-flex-grow-1">
            <select  style="width: 100%;" bind:value={orderBy}>
              <option value="" disabled selected>Sort by</option>
              <option>score</option>
              <option>rank</option>
              <option>popularity</option> 
            </select>
        </div>
        <button class="button ml-1" on:click={() => {sort_asc = !sort_asc}}>
            <span class="icon is-right">
                <i class={sort_asc ? "gg-sort-za" : "gg-sort-az"} />
            </span>
        </button> 
    </div>
    <div class="p-4 genres">
        <p class="menu-label">Genre</p>
        <ul class="menu-list" id="genre_list">
            {#each genre_list as genre}
                <li>
                    <a>
                        <label class="checkbox">
                            <input
                                type="checkbox"
                                id={genre.mal_id}
                                on:change={toggleGenre}
                            />
                            {genre.name}
                        </label>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
    <div style="flex-grow: 1;" />
    <div class="panel-block">
        <button
            class="button is-link is-outlined is-fullwidth"
            on:click={apply}
        >
            Apply
        </button>
        <button
            class="ml-1 button is-danger is-outlined is-fullwidth"
            on:click={clear}
        >
            Clear
        </button>
    </div>
</nav>

<style>
    .panel-block {
        width: 260px;
    }
    .panel {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 72px);
    }

    .genres {
        height: 100%;
        overflow-y: scroll;
    }
</style>
