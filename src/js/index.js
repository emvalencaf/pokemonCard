import { PokemonController } from "./Controller/Pokemon.controller.js"
import { PokemonService } from "./Service/Pokemon.service.js"
import { PokemonView } from "./View/Pokemon.view.js"


const pokemonService = new PokemonService()
const pokemonView = new PokemonView(document.querySelector(".pokemon-card-body"))
const pokemonController = new PokemonController(pokemonView, pokemonService)

const form = document.querySelector("form")
const input = document.querySelector("input")

pokemonController.renderBackgroundImage()

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    let valor = input.value
    
    if(valor === "" || valor.length === 0) return console.log("preencha um número ou nome de pokemon")

    pokemonController.getPokemon(valor)
})

pokemonController.view.container.addEventListener("click", (e)=>{
    if(!e.target.children.length) return
    
    return pokemonController.toggleCard()
})