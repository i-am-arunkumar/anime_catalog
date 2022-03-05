<script>
	import Episodes from './Episodes.svelte';
  import Transition from "../../SharedComponents/Transition.svelte";
  import { onMount } from "svelte";
  import Reviews from "./Reviews.svelte";
  import Details from "./Details.svelte";
  import Recommendations from "./Recommendations.svelte";
  import { selectedAnime as data } from "../../store/anime";
  let src = $data.images.webp.large_image_url;
  
  onMount(() => window.scrollTo(0, 0));

  let tabs = ["Details", "Episodes", "Reviews", "Recommendations"];
  let selected_index = 0;

  function selectTab(i) {
    selected_index = i;
  }
</script>

<Transition>
  <div>
    <div class="p-3  has-background-light">
      <div class="title">{$data.title_japanese}</div>
      <div class="subtitle">{$data.title_english}</div>
    </div>
    <div class="columns ">
      <div class="column mt-4 is-one-third">
        <div class="parallax">
          <div class="parallax-top-left" tabindex="1" />
          <div class="parallax-top-right" tabindex="2" />
          <div class="parallax-bottom-left" tabindex="3" />
          <div class="parallax-bottom-right" tabindex="4" />
          <div class="parallax-content">
            <div class="parallax-front">
              <div class="title" style="color:white">{$data.title}</div>
            </div>
            <div class="parallax-back">
              <img {src} class="picture img-responsive rounded" />
            </div>
          </div>
        </div>
        <article class="panel mt-6 is-text-center">
          <p class="panel-heading has-text-white	 is-primary">Information</p>
          <div class="panel-block is-active">
            <h1 class="title is-6 mr-2">Type:</h1>
            <p class="subtitle is-6">{$data.type}</p>
          </div>
          <div class="panel-block is-active">
            <h1 class="title is-6 mr-2">Episodes:</h1>
            <p class="subtitle is-6">{$data.episodes}</p>
          </div>
          <div class="panel-block is-active">
            <h1 class="title is-6 mr-2">Producers:</h1>
            <p  class="producer subtitle is-6">
              {$data.producers.map((s) => s.name).join(", ")}
            </p>
          </div>
          <div class="panel-block is-active">
            <h1 class="title is-6 mr-2">Status:</h1>
            <p class="subtitle is-6">{$data.status}</p>
          </div>
          <div class="panel-block is-active">
            <h1 class="title is-6 mr-2">Licensors:</h1>
            <p class="subtitle is-6">
              {$data.licensors.map((s) => s.name).join(", ")}
            </p>
          </div>
          <div class="panel-block is-active">
            <h1 class="title is-6 mr-2">Studios:</h1>
            <p class="subtitle is-6">
              {$data.studios.map((s) => s.name).join(", ")}
            </p>
          </div>
          <div class="panel-block is-active">
            <h1 class="title is-6 mr-2">Source:</h1>
            <p class="subtitle is-6">{$data.source}</p>
          </div>
          <div class="panel-block is-active">
            <h1 class="title is-6 mr-2">Genres:</h1>
            <p class="subtitle is-6">
              {$data.genres.map((s) => s.name).join(", ")}
            </p>
          </div>
          <div class="panel-block is-active">
            <h1 class="title is-6 mr-2">Themes:</h1>
            <p class="subtitle is-6">
              {$data.themes.map((s) => s.name).join(", ")}
            </p>
          </div>
          <div class="panel-block is-active">
            <h1 class="title is-6 mr-2">Demographic:</h1>
            <p class="subtitle is-6">
              {$data.demographics.map((s) => s.name).join(", ")}
            </p>
          </div>
          <div class="panel-block is-active">
            <h1 class="title is-6 mr-2">Duration:</h1>
            <p class="subtitle is-6">{$data.duration}</p>
          </div>
          <div class="panel-block is-active">
            <h1 class="title is-6 mr-2">Rating:</h1>
            <p class="subtitle is-6">{$data.rating}</p>
          </div>
        </article>
      </div>
      <div class="column mt-4 left-container">
        <div class="tabs is-boxed">
          <ul>
            {#each tabs as tab, i}
              <li class={i === selected_index ? "is-active" : ""}>
                <a on:click={() => selectTab(i)}>
                  <span class="icon is-small">
                    <i class="fas fa-Details" aria-hidden="true"/>
                  </span>
                  <span>{tab}</span>
                </a>
              </li>
            {/each}
          </ul>
        </div>

        {#if selected_index === 0}
          <Details/>
        {:else if selected_index === 1}
          <Episodes/>
        {:else if selected_index === 2}
          <Reviews/>
        {:else if selected_index === 3}
          <Recommendations/>
        {/if}
      </div>
    </div>
  </div>
</Transition>

<style>
  .left-container {
    background-color: #fff;
  }
  .picture {
    width: 100%;
    border-radius: 8px;
  }
  .producer{
      display: -webkit-box;
        max-height: 80%;
        max-width: 300px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
  }
</style>
