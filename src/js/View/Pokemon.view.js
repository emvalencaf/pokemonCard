export class PokemonView{
    constructor(card, error){
        this.container = card
        this.container_error = error
    }

    render(pokemon){

        this.clearHTML()

        const html = `
        <li class="head-pokemon-card">
            <div class="card-information">
                <div class="pokeball"><span class="text">${pokemon.id}</span></div><h2 class="title">${pokemon.name}</h2><div><span class="text">hp</span><span class="text">${pokemon.stats[0].base_stat}</span></div>
            </div>
        </li>
        <li class="main-pokemon-card">
            <div class="container">
                ${this.renderTypeList(pokemon.type)}
            </div>
            <div class="card-image pokemonType ${pokemon.type[0].type.name}">
                <img src="${pokemon.sprite}" alt="imagem do pokemon nº ${pokemon.id}: ${pokemon.name}">
            </div>
        </li>
        <li class="main-pokemon-card">
            <div class="card-information">
                <p class="text">
                    <abbr title="PokeDex's entry">${pokemon.entry}</abbr>
                </p>
            </div>
        </li>
        <li class="main-pokemon-card">
            <abbr title="pokemon's abillties"><div class="container ability">
                ${this.renderAbillityList(pokemon.abilities)}
            </div></abbr>
        </li>
        <li class="main-pokemon-card">
            <div class="container">
                ${this.renderStats(pokemon.stats)}
            </div>
        </li>
        `

        this.container.innerHTML = html

    }

    renderAbillityList(abilities){

        return abilities.map(ability=>`
            <span>
                ${ability.ability.name}
            </span>
        `).join("")
    }
    
    renderTypeList(types){
        return types.map(slot=>{
            return `<div class="card-type pokemonType ${slot.type.name}">
                <span>${slot.type.name}</span>
            </div>`
        }).join("")
    }

    renderBackgroundImage(date){
        const time = this.DayorNight(date.getHours())
        document.body.style.backgroundImage = `url('./src/imagens/background-${time}.gif')`
    }

    DayorNight(hours){
        if(hours >= 6 && hours < 17) return 'day'

        return 'night'
    }

    renderStats(stats){
        console.log(stats)
        const abbr = {
            attack: "atk",
            defense: "def",
            "special-attack": "sp. atk",
            "special-defense": "sp. def",
            speed: "spd"
        }
        return stats.map(stat=>{
            if(stat.stat.name === "hp") return
            return `
            <abbr title="${stat.stat.name}">
                <div class="container stat">
                    <span class="title">${abbr[stat.stat.name]}</span>
                    <span class="text">${stat.base_stat}</span>
                </div>
            </abbr>
            `
        }).join("")
    }

    clearHTML(){
        this.container.innerHTML = ""
    }

    renderError(err){
        
        if(!err) {
            this.container_error.classList.remove("active")
            return
        }

        this.clearHTML()

        this.container_error.querySelector(".text").innerHTML = err
        this.container_error.classList.add("active")
    }
}