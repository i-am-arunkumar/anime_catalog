<script>
  export let data;
  let utubelink = data.trailer.embed_url;
</script>

<div class="card mx-6">
  <footer class="card-footer">
    <div class="card-footer-item item">
      <h1 class="subtitle is-6">Score</h1>
      <h2 class="title is-4">{data.score}</h2>
    </div>
    <div class="card-footer-item item">
      <h1 class="subtitle is-6">Ranked</h1>
      <h2 class="title is-4">#{data.rank}</h2>
    </div>
    <div class="card-footer-item item">
      <h1 class="subtitle is-6">Popularity</h1>
      <h2 class="title is-4">#{data.popularity}</h2>
    </div>
  </footer>
</div>
<div class="my-6 container">
  <button class="button is-dark">
    <span class="icon">
      <i class="gg-add-r" />
    </span>
    <span>Add to Wishlist</span>
  </button>
</div>
<div class="container">
  <h1 class="title is-4">Synopsis</h1>
  <p>{data.synopsis}</p>
  {#if utubelink}
    <div class="video mx-2">
      <h1 class="title is-4">Official Trailer</h1>
      <div class="player video-promotion">
        <a>
          <iframe
            id="player"
            type="text/html"
            width="640"
            height="390"
            src={utubelink}
            frameborder="0"
          />
        </a>
      </div>
    </div>
  {/if}
</div>

<style>
  .item {
    flex-direction: column;
  }

  .container {
    margin: 16px;
  }
  .card {
    margin: 18px;
    font-size: 16px;
  }
  .video {
    width: 640px;
    height: 390px;
    margin-top: 16px;
  }
</style>
