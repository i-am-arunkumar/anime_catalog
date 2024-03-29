import { getLatestAnimes, getPopularAnimes, getRandomAnimes, getTopAnimes, getRecommendedAnimes, searchAnime } from "./api";
import { current_filter, animeList, currentPage, pagination } from "../store/anime";
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

export function setCurrentFilter(id, params) {
    current_filter.set({ id: id, params: params })
}

export async function randomAnime() {
    current_filter.set({ id: "random" })
    navigate("/details")
    var data = await getRandomAnimes()
    for (var i = 0; i < 3; i++) {
        if (data.data.rating.includes("Nudity") || data.data.rating.includes("Hentai"))
            continue;
        else {
            navigate(`/details/${data.data.mal_id}`, { replace: true, state: { data: data.data } });
            break;
        }
    }
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