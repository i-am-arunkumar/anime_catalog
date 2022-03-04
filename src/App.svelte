<script>
	import Header from "./SharedComponents/Header.svelte";
	import Home from "./Pages/HomePage/Homepage.svelte";
	import DetailPage from "./Pages/DetailPage/DetailPage.svelte";
	import { Router, Route } from "svelte-routing";
	export let url = "/";
</script>

<Router {url}>
	<Header />
	<div class="topbar-spacer" />
	<Route path="/" component={Home} />
	<Route path="/detail" component={DetailPage} />
</Router>

<style>
	.topbar-spacer {
		height: 64px;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
