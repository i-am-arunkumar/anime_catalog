<script>
  import { Link, link } from "svelte-routing";
  import SignInButton from "../Pages/Authentication/Signin.svelte";
  import LogInButton from "../Pages/Authentication/Login.svelte";
  import Profile from "../Pages/Profile/Profile.svelte"

import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
let user = auth.currentUser;
onAuthStateChanged(auth, (u) => (user = u));


  import {
    setFilter,
    randomAnime,
  } from "../utils/filter_utils";
  import { current_filter } from "../store/anime";

  function navigate_filter(e) {
    if (e.target.id) setFilter(e.target.id);
  }

  $: location.pathname;

</script>

<!-- svelte-ignore a11y-no-redundant-roles -->
<nav
  style="border-radius: 8px;z-index: 100000;"
  class="navbar is-primary is-fixed-top m-2"
  role="navigation"
  aria-label="main navigation"
>
  <!-- <nav style="border-radius: 8px;" class="navbar is-primary is-fixed-top m-2" role="navigation" aria-label="main navigation">
   -->
  <div class="navbar-brand">
    <Link class="navbar-item" to="/">
      <img alt="" src="favicon.png" width="28" height="28" />
      <span class="ml-2 is-size-4 has-text-weight-bold">ANICAT</span>
    </Link>
  </div>

  <div class="navbar-menu">
    <div class="navbar-start">
      <a
        class={"navbar-item is-clickable " +
          ("top" === $current_filter.id && "is-active")}
        id="top"
        on:click={navigate_filter}
      >
        Top Animes
      </a>
      <a
        class={"navbar-item is-clickable " +
          ("popular" === $current_filter.id && "is-active")}
        id="popular"
        on:click={navigate_filter}
      >
        Popular
      </a>
      <a
        class={"navbar-item is-clickable " +
          ("latest" === $current_filter.id && "is-active")}
        id="latest"
        on:click={navigate_filter}
      >
        Latest
      </a>
      <a class="navbar-item is-clickable " id="random" on:click={randomAnime}>
        Random Anime
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          {#if !user}
            <SignInButton />
            <LogInButton />
          {:else}
          <Profile/>
          {/if}
        </div>
      </div>
    </div>
  </div>
</nav>
