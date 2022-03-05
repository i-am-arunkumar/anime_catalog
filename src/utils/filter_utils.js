
import { getLatestAnimes, getRandomAnimes, getTopAnimes, getRecommendedAnimes, searchAnime } from "./api";
import { current_filter, animeList, selectedAnime } from "../store/anime";
import { navigate } from "svelte-routing";

const filter_fetch = {
    "top" : getTopAnimes,
    "latest" : getLatestAnimes,
    "recommendations" : getRecommendedAnimes,
    "search" : searchAnime
}


export function getCurrentFilter() {
    return $current_filter.id
}

export async function randomAnime() {
    navigate("/details")
    selectedAnime.set(null)
    return getRandomAnimes().then(data => {
        selectedAnime.set(data)
    }) 
}

export function setFilter(filter, params) {
    animeList.set(null)
    current_filter.set({id : filter, params : params})
    filter_fetch[filter](params).then(res => {
        animeList.set(res.data)
    })
}