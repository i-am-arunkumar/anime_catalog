<script>
    import Transition from "../../SharedComponents/Transition.svelte";
    let src = 'aot.jpg'
</script>

<Transition>
<div>
<div class="p-3  has-background-light">
    <div class="title">Shingeki no Kyojin</div>
    <div class="subtitle">Attack on Titan</div>
</div>
    <div class="columns ">
        <div class="column mt-4 is-one-third">
            <div class="parallax">
                <div class="parallax-top-left" tabindex="1"></div>
                <div class="parallax-top-right" tabindex="2"></div>
                <div class="parallax-bottom-left" tabindex="3"></div>
                <div class="parallax-bottom-right" tabindex="4"></div>
                <div class="parallax-content">
                  <div class="parallax-front">
                    <div class="title" style="color:white" >Shingeki no Kyojin</div>
                  </div>
                  <div class="parallax-back">
                    <img src={src} class="picture img-responsive rounded" />
                  </div>
                </div>
              </div>
              <article class="panel mt-6">
                <p class="panel-heading has-text-white	 is-primary">
                  Information
                </p>
                <a class="panel-block is-active">
                    <h1 class="title is-6">Type:</h1>
                    <p class="subtitle is-6">TV</p>
                </a>
                <a class="panel-block is-active">
                    <h1 class="title is-6">Episodes:</h1>
                    <p class="subtitle is-6">25</p>
                </a>
                <a class="panel-block is-active">
                    <h1 class="title is-6">Status:</h1>
                    <p class="subtitle is-6">Finished Airing</p>
                </a>
                <a class="panel-block is-active">
                    <h1 class="title is-6">Licensors:</h1>
                    <p class="subtitle is-6">Funimation</p>
                </a>
                <a class="panel-block is-active">
                    <h1 class="title is-6">Studios:</h1>
                    <p class="subtitle is-6">Wit Studio</p>
                </a>
                <a class="panel-block is-active">
                    <h1 class="title is-6">Source:</h1>
                    <p class="subtitle is-6">Manga</p>
                </a>
                <a class="panel-block is-active">
                    <h1 class="title is-6">Genres:</h1>
                    <p class="subtitle is-6">Action, Drama, Fantasy, Mystery</p>
                </a>
                <a class="panel-block is-active">
                    <h1 class="title is-6">Themes:</h1>
                    <p class="subtitle is-6">Military, Super Power</p>
                </a>
                <a class="panel-block is-active">
                    <h1 class="title is-6">Demographic:</h1>
                    <p class="subtitle is-6">Shounen</p>
                </a>
                <a class="panel-block is-active">
                    <h1 class="title is-6">Duration:</h1>
                    <p class="subtitle is-6">24 min. per ep.</p>
                </a>
                <a class="panel-block is-active">
                    <h1 class="title is-6">Rating:</h1>
                    <p class="subtitle is-6">R - 17+ (violence & profanity)</p>
                </a>
                

              </article> 
        </div>
        <div class="column mt-4">
            <div class="tabs is-boxed">
                <ul>
                  <li class="is-active">
                    <a>
                      <span class="icon is-small"><i class="fas fa-Details" aria-hidden="true"></i></span>
                      <span>Details</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span class="icon is-small"><i class="fas fa-Epidsodes" aria-hidden="true"></i></span>
                      <span>Episodes</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span class="icon is-small"><i class="fas fa-Recommendations" aria-hidden="true"></i></span>
                      <span>Recommendations</span>
                    </a>
                  </li>  
                </ul>
            </div>
                <div class="card mx-6">
                    <footer class="card-footer">
                    <div class="card-footer-item item">
                        <h1 class="subtitle is-6">Score</h1>
                        <h2 class="title is-4">8.52</h2>

                    </div>
                    <div class="card-footer-item item">
                        <h1 class="subtitle is-6">Ranked</h1>
                        <h2 class="title is-4">#1</h2>
                        </div>
                        <div class="card-footer-item item">
                            <h1 class="subtitle is-6">Popularity</h1>
                        <h2 class="title is-4">#1</h2>
                        </div>
                    </footer>
                </div>  
                <div class="my-6 container">
                    <button class="button is-dark">
                        <span class="icon">
                            <i class="gg-add-r"></i>
                        </span>
                        <span>Add to Wishlist</span>
                    </button>
               </div>    
               <div class="container">
                <h1 class="title is-4">Synopsis</h1>
                <p>Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. 
                    What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure.
                    To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. 
                    However, that fragile calm is soon shattered when a colossal Titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.
                </p>
                <p>After witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, 
                    an elite military unit that combats the merciless humanoids outside the protection of the walls. Eren, his adopted sister Mikasa Ackerman, 
                    and his childhood friend Armin Arlert join the brutal war against the Titans and race to discover a way of defeating them before the last walls are breached.
                </p>
             </div>  
             <div class="card">
                <h1 class="title is-4">Review</h1>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">John Smith</p>
                      <p >@johnsmith</p>
                    </div>
                  </div>
              
                  <div class="content">
                    Oh dear Shingeki no Kyojin, where do I even begin. If you've talked with your friends about anime, 
                    then the couple anime that everyone talks about are Naruto, Bleach, One Piece, Dragon Ball, and... Shingeki no Kyojin. 
                    What's the difference between Shingeki and the rest? Shingeki only has 25 episodes so far yet it's on par in popularity with the other super long, Americanized anime. 
                    Why is it popular? Well that's simply because it's stunningly amazing. Those people that call Shingeki no Kyojin "overrated" may not have the same taste as me, and that's perfectly fine, but in my honest opinion, Shingeki no Kyojin is one of if not the greatest anime to be made. 
                    It's not popular for no reason. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                  <p class="card-footer-item">
                    <span>
                      Share on <a href="#">Facebook</a>
                    </span>
                  </p>
                </div>
            </div>
              
        </div>   
    </div>
</div>
    
</Transition>
<style>
    .item{
        flex-direction : column;
    }
    .container{
        margin: 16px;
    }
    .card{
        margin: 18px;
        font-size:16px;
    }

    .picture{
        width: 100%;
        border-radius:8px;

    }
    .content{
        font-size: 12px;
    }

    .main{
        display: flex;
    }
</style>