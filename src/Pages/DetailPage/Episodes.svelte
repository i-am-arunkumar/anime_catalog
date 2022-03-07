<script>
	import { onMount } from 'svelte';
  import { getEpisodes } from "../../utils/api";

  export let id
  let episodes
  onMount(() => {
    getEpisodes(id).then(d => {
      episodes = d.data
    })
  })

</script>
<div>
  {#if episodes}

  <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th>Episodes no.</th>
        <th>Episodes Name</th>
        <th>Aired date</th>
        <th>filler</th>
      </tr>
    </thead>
    <tbody>
        {#each episodes as  episode}
        <tr>
          <td>{episode.mal_id}</td>
          <td>{episode.title}</td>
          <td>{new Date(episode.aired).toLocaleDateString()}</td>
          <td>{episode.filler ? "Yes" : "No"}</td>
        </tr>
        {/each} 
    </tbody>
  </table>  
  {:else}
        <progress class="progress is-small is-primary" max="100">15%</progress>
  {/if}
</div> 