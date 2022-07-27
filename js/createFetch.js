export function createFetch(url){
    function handleError(response){
        if(!reponse.ok) throw Error(`${response.status}:${response.statusText}`)

        return response
    }

    return fetch(url)
        .then(response => handleError(response))
        .then(response => response.json())
}