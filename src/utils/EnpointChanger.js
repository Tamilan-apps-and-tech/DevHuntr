export function changeEndpoint(query,page,site){

    window.history.replaceState(null,"",`/search?q=${query}&page=${+page + +1}&site=${site}`)
    alert(`${query},${site},${page}`)

}

