<script>

    import { navigate } from "svelte-routing";
    import {  selectedAnime } from "../store/anime";

    export let data;
    let img = data.images.jpg.image_url;

    function openDetailsPage() {
        selectedAnime.set(data)
        navigate("/details")
    }

</script>

<div class="column is-2">
    <div class="is-clickable card"  tabindex="0" on:click={openDetailsPage} >
        <div class="card-image">
            <figure class="image is-3by4">
                <img class="base-img" src={img} alt="" />
                <div class="desc p-4">
                    <div
                        class="syn-content has-text-left has-text-white is-size-7"
                    >
                        {data.synopsis}
                    </div>
                </div>
                <img class="shrink-img" src={img} alt="" />
            </figure>
        </div>
        <div class="p-4 card-content has-text-left">
            <p class=" mb-2 title is-6 ">{data.title}</p>
            <p class="is-size-6">{data.episodes ? (data.type === "movie" || data.episodes === 1 ? "Movie" :`${data.episodes} episodes`) : "Ongoing"}</p>
        </div>
        <div class="card-footer level m-0">
            <div class="level-left">
                <div class="m-0 stars block p-2" />
                <div class="heading">{data.score || ""}</div>
            </div>
            <div class="level-item" />
            <div class="level-right p-2">
                <div class="heading">{data.year || ""}</div>
            </div>
        </div>
        <span id="ripple"></span>
    </div>
</div>

<style>

    .title{
        min-height: 54px;
    }

    img{
        background-color: aliceblue;
    }

    .card{
        overflow: hidden;
        background-color: #fefefe;
    }
  
    .card:focus span#ripple{
        transition: all 700ms ease-out;       
        content: "";
        transform: scale(5);
        opacity: 0;
    }
    span#ripple{
        width: 200px;
        height: 200px;
        opacity: 0.5;
        background: rgb(0, 0, 0); 
        content: "";
        top: 0;
        transform: scale(0);
        border-radius: 50%; 
        left: 0;
        position: absolute;
        background: rgba(0, 0, 0, 0.6);
    }

    .image {
        overflow: hidden;
    }

    .syn-content {
        display: -webkit-box;
        max-height: 80%;
        -webkit-line-clamp: 10;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .desc {
        width: 100%;
        top: 0;
        left: 0;
        height: 100%;
        position: absolute;
        background: rgba(0, 0, 0, 0.6);
    }

    .shrink-img {
        transition: all 300ms;
    }
    .card-image:hover .shrink-img {
        transform: translateY(80%);
        border-radius: 5%;
    }

    .stars {
        display: inline-block;
        font-size: 18px;
        font-family: Times;
        line-height: 1;
    }

    .stars::before {
        content: "★";
        letter-spacing: 3px;
        background: #fc0;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
