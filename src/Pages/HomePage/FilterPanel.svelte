<script>
    import { current_filter } from "../../store/anime";

    const filters = ["Top", "Recent", "Recommendations", "Random", "Genre"];

    function changeFilter(filter_index) {
        current_filter.set(filter_index);
    }
</script>

<div class="" >
<nav class="panel is-not-visible mr-4">
    <p class="panel-heading">
        <span class="level">
            <span class="level-left">
                Filters 
            </span>
            <button class="level-right delete is-medium"></button>
        </span>
    </p>
    <div class="panel-block">
        <p class="control has-icons-left">
            <input class="input" type="text" placeholder="Search" />
            <span class="icon is-left">
                <i class="gg-search"></i>
            </span>
        </p>
    </div>
    {#each filters as filter_item, i}
        <button
            class={`my-1  panel-block ${i == $filter ? "is-active" : ""}`}
            on:click={() => changeFilter(i)}>
            <span class="title is-size-5">
                {filter_item}
            </span>
        </button>
    {/each}
    <div class="p-4" >
        <p class="menu-label">
            Genre
          </p>
          <ul class="menu-list">
            <li><a>Action</a></li>
            <li><a>Adventure</a></li>
            <li><a>Cars</a></li>
            <li><a>Comedy</a></li>
            <li><a>Mystery</a></li>
            <li><a>Horror</a></li>

          </ul>
    </div>
</nav>
</div>

<style>
    .panel-block {
        width: 300px;
    }
    .panel {
        height: 100vh;
    }
</style>
