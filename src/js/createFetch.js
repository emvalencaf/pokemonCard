export async function createFetch(url){
    function handleError(response){
        
        if(!response.ok) throw Error(`ERROR ${response.status}: pokemon not found`)

        return response
    }

    return await fetch(url)
        .then(response => handleError(response))
        .then(response => response.json())
}