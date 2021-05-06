export function changeEndpoint(query,page){
    window.history.replaceState(null,query,`/search?q=${query}&page=${page}`)
}

