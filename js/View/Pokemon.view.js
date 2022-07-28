export class PokemonView{
    constructor(card){
        this.container = card
    }
    render(pokemon){
        console.log(pokemon)
        const html = `
        <div>
            <h2> ${pokemon.id}- ${pokemon.name} ${pokemon.type.length > 1? `${pokemon.type[0].type.name},${pokemon.type[1].type.name}`: pokemon.type[0].type.name}</h2>
        </div>
        <div>
            <img src="${pokemon.sprite}" alt="imagem do pokemon nº ${pokemon.id}: ${pokemon.name}">
        </div>
        <div>
        </div>
        `
        console.log(html)
    }
}