export class PokemonView{
    constructor(card){
        this.container = card
    }

    render(pokemon){

        this.container.innerHTML = ""
        console.log(pokemon)
        const html = `
        <div class="headerCard">
            <h2 class="title"> ${pokemon.id}</span> ${pokemon.name}</h2> ${this.renderTypeList(pokemon.type)}
        </div>
        <div class="pokemonContainer pokemonType ${pokemon.type[0].type.name}">
            <img src="${pokemon.sprite}" alt="imagem do pokemon nº ${pokemon.id}: ${pokemon.name}">
        </div>
        <div class="pokedexEntry">
            <h3 class="title">Pokedex entry:</h3>
            <p class="text">
                ${pokemon.entry}
            </p>
        </div>
        `
        console.log(html)
        this.container.innerHTML = html
    }

    renderTypeList(types){
        return types.map(slot=>{
            return `<span class="pokemonType ${slot.type.name}">${slot.type.name}</span>`
        }).join("")
    }
}