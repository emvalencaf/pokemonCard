import { PokemonController } from "./Controller/Pokemon.controller.js"
import { PokemonService } from "./Service/Pokemon.service.js"
import { PokemonView } from "./View/Pokemon.view.js"

const feedback = document.querySelector("#bs-feedback")
const pokemonService = new PokemonService()
const pokemonView = new PokemonView(document.querySelector(".pokemon-card-body"), feedback)
const pokemonController = new PokemonController(pokemonView, pokemonService)

const form = document.querySelector("form")
const input = document.querySelector("input")

pokemonController.renderBackgroundImage()

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    let valor = input.value


    pokemonController.getPokemon(valor)
})

input.addEventListener("focus", e =>{
    if(feedback.classList.contains("active")) return renderError()
})

feedback.querySelector(".btn").addEventListener("click", e =>{
    renderError()
})

function renderError(){
    pokemonController.renderError()
}