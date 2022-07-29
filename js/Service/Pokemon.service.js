import { PokemonModel } from "../Model/Pokemon.model.js"
import { createFetch } from "../createFetch.js"
import { PARTH } from "../config.js"

export class PokemonService{
    constructor(){
        this.pokemon = {}
    }

    async getPokemon(uri){
        console.log("entrando no service")
        const url = PARTH + uri
        await createFetch(url)
            .then(response =>{
                console.log(response, typeof response)
                const {id, name, types, abilities, sprites} = response
                const sprite = sprites.front_default
                this.pokemon = new PokemonModel(id, name, sprite, types, abilities)
            })
            .catch(err=>console.log(err.message))
    }
}