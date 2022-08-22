import { listaDaCesta } from "../app.js"
import { cesta } from "../app.js"

export function criaItem(nome:any, quantidade: number, preco:number, massa?:any){   
    
    const li = document.createElement('li')
    li.classList.add('lista-item')
    li.classList.add('pt-3')
    li.classList.add('pb-2')

    if(massa){
        li.innerHTML = `- Cookie ${nome}, com massa de ${massa}, quantidade ${quantidade}, valor ${preco},00 <br>`
    } else {
        li.innerHTML = `- Cookie ${nome}, quantidade ${quantidade}, valor ${preco},00 <br>`
    }    
    if(quantidade != 0) {
        listaDaCesta?.appendChild(li)
        cesta.push(preco)
    }
}