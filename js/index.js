import { createFetch } from "./createFetch.js"
import { PARTH } from "./config.js"

let url = PARTH

const input = document.querySelector("input")

input.addEventListener("input", (e) =>{
    let valor = e.target.value
    url = PARTH + valor
    console.log(url)
})