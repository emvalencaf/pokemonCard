import { PokemonController } from "./Controller/Pokemon.controller.js"
import { PokemonService } from "./Service/Pokemon.service.js"
import { PokemonView } from "./View/Pokemon.view.js"


const pokemonService = new PokemonService()
const pokemonView = new PokemonView(document.querySelector("#cardContainer"))
const pokemonController = new PokemonController(pokemonView, pokemonService)

const form = document.querySelector("form")
const input = document.querySelector("input")



form.addEventListener("submit", (e) =>{
    e.preventDefault()
    let valor = input.value
    console.log(valor)
    pokemonController.getPokemon(valor)
})