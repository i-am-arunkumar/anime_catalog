<script>
  import { Link } from "svelte-routing";
  import SignInButton from "../Pages/Authentication/Signin.svelte";
  import LogInButton from "../Pages/Authentication/Login.svelte";
  import { setFilter,randomAnime, getCurrentFilter } from "../utils/filter_utils";
  import { getAuth, onAuthStateChanged } from "firebase/auth";


  function navigate_filter(e) {
    if(e.target.id)
      setFilter(e.target.id)
  }

  const auth = getAuth();
  let user = auth.currentUser;
  onAuthStateChanged(auth, (u) => (user = u));

  function signout(e){
    if(confirm("Are you sure you want to log out!") == true)
    auth.signOut();
  }
</script>

<!-- svelte-ignore a11y-no-redundant-roles -->
<nav
  style="border-radius: 8px;"
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
      <a class={"navbar-item is-clickable" + ("top" === getCurrentFilter() && "is-active") } id="top" on:click={navigate_filter} >
        Top Animes
      </a>
      <a class={"navbar-item is-clickable"+ ("popular" === getCurrentFilter() && "is-active")} id="popular" on:click={navigate_filter}>
        Popular
      </a>
      <a class={"navbar-item is-clickable" + ("latest" === getCurrentFilter() && "is-active")} id="latest" on:click={navigate_filter}>
        Latest
      </a>
      <a class="navbar-item is-clickable" id="random" on:click={randomAnime}>
        Random Anime
      </a>
      <a class="navbar-item is-clickable" id="recommendation" on:click={navigate_filter}>
        Recommendations
      </a>
      
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          {#if !user}
            <SignInButton />
            <LogInButton />
          {:else}
          <button on:click={signout} class="button is-light">
            <strong>Log out</strong>
          </button>
          {/if}
        </div>
      </div>
    </div>
  </div>
</nav>
