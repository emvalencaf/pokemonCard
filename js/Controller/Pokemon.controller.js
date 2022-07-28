export class PokemonController{
    constructor(view, service){
        this.view = view
        this.service = service
    }

    async getPokemon(uri){
        console.log("controller")
        await this.service.getPokemon(uri)
        this.view.render(this.service.pokemon)
    }
}