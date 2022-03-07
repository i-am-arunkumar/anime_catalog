import { getLatestAnimes, getPopularAnimes, getRandomAnimes, getTopAnimes, getRecommendedAnimes, searchAnime } from "./api";
import { current_filter, animeList, selectedAnime, currentPage, pagination } from "../store/anime";
import { get_store_value } from "svelte/internal";
import { navigate } from "svelte-routing";

const filter_fetch = {
    "top": getTopAnimes,
    "latest": getLatestAnimes,
    "recommendations": getRecommendedAnimes,
    "search": searchAnime,
    "popular": getPopularAnimes
}

export function getCurrentFilter() {
    return get_store_value(current_filter)
}


export async function randomAnime() {
    navigate("/details")
    return getRandomAnimes().then(data => {
        navigate(`/details/${data.data.mal_id}`, { replace: true, data: data.data })
    })
}


export function setFilter(filter, params, start_from_begining = true) {
    if (start_from_begining)
        currentPage.set(1)
    if (location.pathname !== "/") navigate("/")
    animeList.set(null)
    current_filter.set({ id: filter, params: params })
    filter_fetch[filter](params).then(res => {
        pagination.set(res.pagination)
        animeList.set(res.data)
    })
}