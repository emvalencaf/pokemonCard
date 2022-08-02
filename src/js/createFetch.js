export async function createFetch(url){
    function handleError(response){
        if(!response.ok) throw Error(`${response.status}:${response.statusText}`)

        return response
    }

    return await fetch(url)
        .then(response => handleError(response))
        .then(response => response.json())
}