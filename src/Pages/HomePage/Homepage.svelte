<script>
    import { onMount } from "svelte";
	import { fetch } from "../../utils/database";
	import Transition from "../../SharedComponents/Transition.svelte";

    let msg;
	onMount(() => {
		fetch("general_msg").then((a) => {
			msg = a;
		});
	});
</script>
<Transition>
<div>
    {#if msg}
		<h1>{msg}</h1>	
	{/if}
	<p>
		Indha project a mudikurom. visit <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn svelte
	</p>
</div>
</Transition>