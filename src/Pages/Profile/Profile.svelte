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
      class="button"
      aria-haspopup="true"
      aria-controls="dropdown-menu"
      use:clickOutside
      on:outclick={close}
      on:click={toggleDropDown}
    >
      <span>Profile</span>
      <span class="icon is-small">
        <i class="gg-chevron-down-o" />
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      <a href="/watchlist" class="dropdown-item" use:link>
        <!-- href="../Wishlist/Wishlist.svelte"  -->
        Watchlist
      </a>
      <a on:click={signout} href="#" class="dropdown-item"> Logout </a>
    </div>
  </div>
</div>
