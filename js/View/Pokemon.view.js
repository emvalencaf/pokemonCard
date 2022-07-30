export class PokemonView{
    constructor(card){
        this.container = card
    }
    render(pokemon){
        console.log(pokemon)
        const html = `
        <div>
            <h2 class="title"> ${pokemon.id}- ${pokemon.name}</h2> ${this.renderTypeList(pokemon.type)}
        </div>
        <div class="pokemonContainer">
            <img src="${pokemon.sprite}" alt="imagem do pokemon nº ${pokemon.id}: ${pokemon.name}">
        </div>
        <div class="pokedexEntry">
            <h3>Pokedex entry:</h3>
            <p class="texto">
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