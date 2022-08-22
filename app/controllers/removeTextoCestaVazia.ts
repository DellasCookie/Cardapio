import { cesta } from "../app.js"

export function removeTextoCestaVazia(){
    const cestaVazia = document.querySelector('[data-cestaVazia]') as HTMLElement
    if(cesta.length > 0){
        cestaVazia.textContent = ''
    }
}