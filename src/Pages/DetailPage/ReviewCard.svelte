<script>
  export let data;
  let dt = new Date(data.date)
  let showMore = false
</script>

<div class="card m-4">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img
            src={data.user.images && data.user.images.jpg.image_url}
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{data.user.username}</p>
        <time datetime="2016-1-1">{ dt.toLocaleDateString() + " " + dt.toLocaleTimeString()}</time>
    </div>
    </div>
<!-- 
    <div class={`content ${showMore ? "" : "show-less"}`}>
      {data.review}
    
      <tp-yt-paper-button id="more" aria-expanded="false" noink="" class="style-scope ytd-expander" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false">
        
        <yt-formatted-string class="more-button style-scope ytd-video-secondary-info-renderer" slot="more-button" role="button">
          Show more
        </yt-formatted-string>
      <paper-ripple class="style-scope tp-yt-paper-button">
          
      
          <div id="background" class="style-scope paper-ripple"></div>
          <div id="waves" class="style-scope paper-ripple"></div>
      </paper-ripple></tp-yt-paper-button>

      <br />
    </div> -->
    <div class="card-footer-item ">
      <div class="level" style="width: 100%;">
        <div class="level-left">
          <div class="level-item">
            <span class="icon">
              <i class="gg-arrow-up" />
            </span>
            <span>
              {data.votes}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<style>
    .show-less{
        display: -webkit-box;
        -webkit-line-clamp: 5;
        max-height: 150px;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>