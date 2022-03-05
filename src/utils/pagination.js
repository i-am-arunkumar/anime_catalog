import { currentPage, pagination } from "../store/anime";
import { setFilter, getCurrentFilter } from "./filter_utils"
import { get_store_value} from "svelte/internal"

export function getPaginationStats() {
    return get_store_value(pagination)
}


export function getCurrentPage() {
    return get_store_value(currentPage)
}

export function nextPage() {
    if(!getPaginationStats().has_next_page){
        return
    }
    currentPage.update(e => e+1)
    setFilter(getCurrentFilter().id, getCurrentFilter().params, false)
}

export function gotoPage(page) {
    currentPage.set(page)
    setFilter(getCurrentFilter().id, getCurrentFilter().params, false)
}

export function prevPage() {
    if(getCurrentPage() === 1){
        return
    }
    currentPage.update(e => e-1)
    setFilter(getCurrentFilter().id, getCurrentFilter().params, false)
}