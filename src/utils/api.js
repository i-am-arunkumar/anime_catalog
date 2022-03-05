import { getCurrentPage } from "./pagination";

const baseUrl = "https://api.jikan.moe/v4/"

async function url(endpoint, params_obj = {}) {
    let params = {...params_obj, sfw: "true", page: getCurrentPage(), limit: 24 }
    let paramsStr = "?"
    Object.entries(params).forEach(([key, val], i) => {
        if (val)
            paramsStr += (key + "=" + val + "&")
    })
    console.log(`${baseUrl}${endpoint}${paramsStr}`);
    return fetch(`${baseUrl}${endpoint}${paramsStr}`).then(e => e.json())
}

export async function getAnimeById(id) {
    return url(`anime/${id}`)
}


export async function getLatestAnimes() {
    return url(`seasons/now`)
}

export async function getTopAnimes() {
    return url("top/anime")
}


export async function getRandomAnimes() {
    return url("random/anime")
}

export async function getRecommendedAnimes() {
    return url("recommendations/anime")
}

export async function getPopularAnimes() {
    return url("anime", { order_by: "favorites", sort: "desc" })
}

export async function searchAnime(params) {
    return url("anime", params)
}


export async function getEpisodes(id) {
    return url(`anime/${id}/episodes`)
}

export async function getReview(id) {
    return url(`anime/${id}/reviews`)
}