export class PokemonController{
    constructor(view, service){
        this.view = view
        this.service = service
    }

    async getPokemon(uri){

        try {
            uri = this.uriValidation(uri)
            
            await this.service.getPokemon(uri)
            await this.service.getPokemonEntry(uri)
            this.view.render(this.service.pokemon)
            
        } catch (err) {
             this.renderError(err.message)
        }
    }

    uriValidation(uri){
        const regex = /\d+/
        const regex2 = /\w/

        if(regex.test(uri)) return uri = Number(uri)

        if(regex2.test(uri)) return uri = uri.toLowerCase().trim()

        if(!regex2.test(uri)) throw Error("ERROR: pokemon's name cannot have special character")

        if(!uri || uri.length === 0) throw Error("ERROR: you must type a pokemon's name or it's pokedex's number")
    }

    renderBackgroundImage(){
        this.view.renderBackgroundImage(new Date())
    }

    renderError(err){
        this.view.renderError(err)
    }
}