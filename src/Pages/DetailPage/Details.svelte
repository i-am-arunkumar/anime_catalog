<script>
  export let data;

  import { getAuth } from "firebase/auth";
  import { updateWatchlist, removeAnime } from "../../utils/database";
  import { db } from "../../utils/firebase";
  import { ref, get } from "firebase/database";
  import { onMount } from "svelte";

  const auth = getAuth();

  function addwatchList(e) {
    const user = auth.currentUser;
    if (user) {
      updateWatchlist(user.uid, data)
        .then(() => {
          find = 1;
          console.log(find);
          alert("Added to watchlist!!");
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
        });
    } else {
      confirm("Please log in to add watchlist!!");
    }
  }

  function removewatchList(e) {
    const user = auth.currentUser;
    removeAnime(user.uid, data)
      .then(() => {
        find = 0;
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  }

  let find = 2;

  async function check(user) {
    const x = await get(ref(db, `watchlist/${user.uid}/${data.mal_id}`));
    return x.exists() ? true : false;
  }

  onMount(() => {
    const user = auth.currentUser;
    if (user) {
      check(user).then((x) => {
        if (x) find = 1;
        else find = 0;
      });
    } else {
      return false;
    }
  });
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
  {#if find === 1}
    <button class="button is-danger" on:click={removewatchList}>
      <span class="icon">
        <i class="gg-remove-r" />
      </span>
      <span>Remove</span>
    </button>
  {:else if find === 0}
    <button class="button is-dark" on:click={addwatchList}>
      <span class="icon">
        <i class="gg-add-r" />
      </span>
      <span>Add to Watchlist</span>
    </button>
  {/if}
</div>
<div class="container">
  <h1 class="title is-4">Synopsis</h1>
  <p>{data.synopsis}</p>
  {#if data.trailer && data.trailer.embed_url}
    <div class="video mx-2">
      <h1 class="title is-4">Official Trailer</h1>
      <div class="player video-promotion">
        <a>
          <iframe
            id="player"
            type="text/html"
            width="640"
            height="390"
            src={data.trailer.embed_url}
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
