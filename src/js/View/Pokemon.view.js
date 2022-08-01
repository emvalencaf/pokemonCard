export class PokemonView{
    constructor(card){
        this.container = card
        this.isFrontCard = true
    }

    render(pokemon){

        this.clearHTML()

        this.isFrontCard = true

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
        <li class="main-pokemon-card">
            <div class="card-information">
                <p class="text">
                    <strong>PokeDex's entry</strong>: ${pokemon.entry}
                </p>
                ${this.renderAbillityList(pokemon.abilities)}
            </div>
        </li>
        `
        console.log(html)
        this.container.innerHTML = html
    }

    renderAbillityList(abilities){
        console.log(abilities)
        console.log(abilities[0].ability.name)
        console.log(abilities[0].is_hidden)
        return abilities.filter(ability => ability.is_hidden).map(ability=>`
        <p>
            ${ability.ability.name}
        </p>
        `).join("")
    }
    
    renderTypeList(types){
        return types.map(slot=>{
            return `<div class="card-type pokemonType ${slot.type.name}">${slot.type.name}</div>`
        }).join("")
    }

    renderBackgroundImage(date){
        const time = this.DayorNight(date.getHours())
        document.body.style.backgroundImage = `url('../src/imagens/background-${time}.gif')`
    }

    DayorNight(hours){
        if(hours >= 6 && hours < 17) return 'day'

        return 'night'
    }

    renderBackCard(pokemon){

        this.clearHTML()

        this.isFrontCard = false

        let html = `
        <li class="head-pokemon-card">
            <div class="card-information">
                <h2 class="title"> ${pokemon.id} - ${pokemon.name}</h2>
            </div>
        </li>
        `
        html += pokemon.stats.map(stat=>{
        return `
            <li class="main-information stat">
                <div class="card-information">
                    <p class="text">${stat.stat.name}</p>
                    <progress value=${stat.base_stat} max="255" class="stat-bar">
                </div>
            </li>
            `
        }).join("")

        this.container.innerHTML = html
    }

    clearHTML(){
        this.container.innerHTML = ""
    }

    toggleCard(pokemon){
        if(!this.isFrontCard) return this.render(pokemon)

        this.renderBackCard(pokemon)
    }
}