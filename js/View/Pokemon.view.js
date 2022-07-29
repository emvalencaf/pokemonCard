export class PokemonView{
    constructor(card){
        this.container = card
    }
    render(pokemon){
        console.log(pokemon)
        const html = `
        <div>
            <h2> ${pokemon.id}- ${pokemon.name}</h2> ${this.renderTypeList(pokemon.type)}
        </div>
        <div id="pokemonContainer">
            <img src="${pokemon.sprite}" alt="imagem do pokemon nº ${pokemon.id}: ${pokemon.name}">
        </div>
        `
        console.log(html)
        this.container.innerHTML = html
    }
    renderTypeList(types){
        return types.map(slot=>{
            return `<span class="pokemonType" style="background-color:${this.renderBackgroundColor(slot.type.name)}">${slot.type.name}</span>`
        }).join("")
    }
    
    renderBackgroundColor(type){
        const typeList = {
            bug:"#A8B820",
            dark:"#705848",
            dragon:"#7038F8",
            fighting:"#C03028",
            ice:"#98D8D8",
            ground:"#E0C068",
            psychic:"#F85888",
            water:"#6890F0",
            normal:"#A8A878",
            poison:"#A040A0",
            steel:"#B8B8D0",
            rock:"#B8A038",
            grass:"#78C850",
            fire:"#F08030",
            flying:"#A890F0",
            fairy:"#EE99AC",
            ghost:"#705898",
            electric:"#F8D030"
        }
        return typeList[type]
    }
}