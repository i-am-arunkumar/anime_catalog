<script>
	import Transition from './../../SharedComponents/Transition.svelte';
    import { selectedAnime as data } from "../../store/anime";
</script>
<div class="card">
    <h1 class="title is-4">Review</h1>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">John Smith</p>
          <p>@johnsmith</p>
        </div>
      </div>

      <div class="content">
        Oh dear Shingeki no Kyojin, where do I even begin. If you've
        talked with your friends about anime, then the couple anime that
        everyone talks about are Naruto, Bleach, One Piece, Dragon Ball,
        and... Shingeki no Kyojin. What's the difference between Shingeki
        and the rest? Shingeki only has 25 episodes so far yet it's on par
        in popularity with the other super long, Americanized anime. Why
        is it popular? Well that's simply because it's stunningly amazing.
        Those people that call Shingeki no Kyojin "overrated" may not have
        the same taste as me, and that's perfectly fine, but in my honest
        opinion, Shingeki no Kyojin is one of if not the greatest anime to
        be made. It's not popular for no reason. <a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br />
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
      <p class="card-footer-item">
        <span>
          Share on <a href="#">Facebook</a>
        </span>
      </p>
    </div>
  </div>