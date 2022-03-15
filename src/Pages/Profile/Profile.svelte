<script>
  import { getAuth, onAuthStateChanged } from "firebase/auth";
import {  link } from "svelte-routing";

  const auth = getAuth();

  function signout(e) {
    if (confirm("Are you sure you want to log out!") == true) auth.signOut();
  }

  let dropDown;

  function close(e) {
    dropDown.classList.remove("is-active");
  }


  function toggleDropDown(e) {
    dropDown.classList.toggle("is-active");
  }

  function clickOutside(node) {
	const handleClick = (event) => {
		if (!node.contains(event.target)) {
			node.dispatchEvent(new CustomEvent("outclick"));
		}
	};

	document.addEventListener("click", handleClick, true);

	return {
		destroy() {
			document.removeEventListener("click", handleClick, true);
		},
	};
}



</script>

<div class="dropdown is-right" bind:this={dropDown}>
  <div class="dropdown-trigger">
    <button
      class="button is-text  btn-icon"
      aria-haspopup="true"
      aria-controls="dropdown-menu"
      use:clickOutside
      on:outclick={close}
      on:click={toggleDropDown}
    >
      <span class="icon is-small profile-icon">
        <i class="gg-profile" />
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      <a href="/watchlist" class="dropdown-item" use:link>
        Watchlist
      </a>
      <a on:click={signout} href="#" class="dropdown-item"> Logout </a>
    </div>
  </div>
</div>

<style>
  .btn-icon{
    background-color: transparent;
    color: white;

  }

  .btn-icon:hover{
    color: black;
  }
</style>
