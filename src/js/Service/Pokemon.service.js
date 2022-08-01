import { PokemonModel } from "../Model/Pokemon.model.js"
import { createFetch } from "../createFetch.js"
import { PARTH } from "../config.js"

export class PokemonService{
    constructor(){
        this.pokemon = {}
    }

    async getPokemon(uri){
        console.log("entrando no service")
        const url = PARTH + "pokemon/" + uri
        await createFetch(url)
            .then(response =>{
                console.log(response, typeof response)
                const {id, name, types, abilities, sprites} = response
                const sprite = sprites.front_default
                this.pokemon = new PokemonModel(id, name, sprite, types, abilities)
            })
    }

    async getPokemonEntry(uri){
        console.log("entrando no service")
        const url = PARTH + "pokemon-species/" + uri
        await createFetch(url)
            .then(response =>{
                const {flavor_text} = response.flavor_text_entries.findLast(entrada=> entrada.language.name === "en")
                this.pokemon.entry = flavor_text
            })
    }
}