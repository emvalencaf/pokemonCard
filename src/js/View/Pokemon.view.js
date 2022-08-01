export class PokemonView{
    constructor(card){
        this.container = card
    }

    render(pokemon){

        this.container.innerHTML = ""
        console.log(pokemon)
        const html = `
        <li class="head-pokemon-card">
            <div class="card-information">
                <h2 class="title"> ${pokemon.id} - ${pokemon.name}</h2>
            </div>
        </li>
        <li class="main-pokemon-card">
            <div class="container">
                ${this.renderTypeList(pokemon.type)}
            </div>
            <div class="card-image pokemonType ${pokemon.type[0].type.name}">
                <img src="${pokemon.sprite}" alt="imagem do pokemon nº ${pokemon.id}: ${pokemon.name}" class="pokemonType ${pokemon.type[0].type.name}">
            </div>
        </li>
        <li class="main-pokecard">
            <div class="card-information">
                <p class="text">
                    <strong>PokeDex's entry</strong>: ${pokemon.entry}
                </p>
            </div>
        </li>
        `
        console.log(html)
        this.container.innerHTML = html
    }

    renderTypeList(types){
        return types.map(slot=>{
            return `<div class="card-type pokemonType ${slot.type.name}">${slot.type.name}</div>`
        }).join("")
    }

    renderBackgroundImage(date){
        const time = this.DayorNight(date.getHours())
        document.body.style.backgroundImage = `url('../imagens/background-${time}.gif')`
    }

    DayorNight(hours){
        if(hours >= 6 && hours < 17) return 'day'

        return 'night'
    }
}