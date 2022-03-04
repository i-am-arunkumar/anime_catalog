<script>
  import { Link } from "svelte-routing";
  import SignInButton from "../Pages/Authentication/Signin.svelte";
  import LogInButton from "../Pages/Authentication/Login.svelte";
  
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
      <Link to="detail" class="navbar-item">
        Laville
      </Link>
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