<script>
  import { Link } from "svelte-routing";
  import SignInButton from "../Pages/Authentication/Signin.svelte";
  import LogInButton from "../Pages/Authentication/Login.svelte";
  import { setFilter,randomAnime } from "../utils/filter_utils";

  function navigate_filter(e) {
    console.log(e.target.id);
    if(e.target.id)
      setFilter(e.target.id)
  }

</script>

<nav style="border-radius: 8px;" class="navbar is-primary is-fixed-top m-2" role="navigation" aria-label="main navigation">
  
  <div class="navbar-brand">
    <Link class="navbar-item" to="/">
      <img alt="" src="favicon.png" width="28" height="28">
      <span class="ml-2 is-size-4 has-text-weight-bold" >ANICAT</span>
    </Link>
  </div>

  <div class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item is-clickable" id="top" on:click={navigate_filter} >
        Top Animes
      </a>
      <a class="navbar-item is-clickable" id="latest" on:click={navigate_filter}>
        Latest
      </a>
      <a class="navbar-item is-clickable" id="random" on:click={randomAnime}>
        Random Animes
      </a>
      <a class="navbar-item is-clickable" id="recommendation" on:click={navigate_filter}>
        Recommendations
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
           <SignInButton/>
        <LogInButton/>          
        </div>
      </div>
    </div>
  </div>

</nav>  