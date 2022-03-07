<script>
  import { navigate } from "svelte-routing";
  import { selectedAnime } from "../../store/anime";

  export let data;

  function viewDetails() {
    selectedAnime.set(null);
    navigate(`/details/${data.mal_id}`);
  }
</script>

<div class="card is-clickable" on:click={viewDetails}>
  <div class="card-image">
    <figure class="image is-3by4">
      <img src={data.images.jpg.image_url} alt="" />
    </figure>
  </div>
  <div class="card-content">
    <div>
      {data.title}
    </div>
  </div>
</div>
