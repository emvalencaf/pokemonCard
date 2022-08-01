export class PokemonController{
    constructor(view, service){
        this.view = view
        this.service = service
    }

    async getPokemon(uri){
        console.log("controller")
        await this.service.getPokemon(uri)
        await this.service.getPokemonEntry(uri)
        this.view.render(this.service.pokemon)
    }

    renderBackgroundImage(){
        this.view.renderBackgroundImage(new Date())
    }
}