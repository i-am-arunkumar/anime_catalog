const credentials = {
    id: "f15cb7c223c9d8fe91480ea1a33ded2d",
    secret: "6059444a586fe1d474223adee404787d512e76d31ceab3c3a06c277c6f45f2fe"
}


const baseUrl = "https://api.jikan.moe/v4/"

async function url(endpoint) {
    return fetch(`${baseUrl}${endpoint}`).then(e => e.json())
}

export async function getLatestAnimes() {
    return url("anime?order_by=start_date&sort=asc")
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

export async function searchAnime(params) {
    let { q, genre, status } = params
    let base = "anime?"
    Object.entries(params).forEach(([key,val],i) => {
        base +=  (key + "=" + val + "&")
    })
    return url(base)
}



