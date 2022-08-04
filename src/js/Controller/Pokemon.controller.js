export class PokemonController{
    constructor(view, service){
        this.view = view
        this.service = service
    }

    async getPokemon(uri){

        uri = this.uriValidation(uri)

        await this.service.getPokemon(uri)
        await this.service.getPokemonEntry(uri)
        this.view.render(this.service.pokemon)
    }

    uriValidation(uri){
        const regex = /\d+/
        const regex2 = /\w/

        if(regex.test(uri)) return uri = Number(uri)

        if(regex2.test(uri)) return uri = uri.toLowerCase().trim()

    }

    renderBackgroundImage(){
        this.view.renderBackgroundImage(new Date())
    }


}