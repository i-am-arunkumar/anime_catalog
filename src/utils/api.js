const credentials = {
    id: "f15cb7c223c9d8fe91480ea1a33ded2d",
    secret: "6059444a586fe1d474223adee404787d512e76d31ceab3c3a06c277c6f45f2fe"
}


const baseUrl = "https://api.jikan.moe/v4/"

export async function getTopAnimes() {
    return fetch(`${baseUrl}top/anime`).then(e=>e.json())
}