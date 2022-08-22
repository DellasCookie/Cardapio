import { Cookie } from "./models/Cookies.js";
import { numeroDeCookies } from "./controllers/numeroDeCookies.js";

const tradicional = new Cookie('TRADICIONAL', 10);
const chocolate = new Cookie('CHOCOLATE', 10);
const doceAmor = new Cookie('DOCE AMOR', 12);
const amorDeVo = new Cookie('AMOR DE VÓ', 12);
const doseDeAmor = new Cookie('DOSE DE AMOR', 12);

const lista = [ tradicional, chocolate, doceAmor, amorDeVo, doseDeAmor]
const cesta = []

const form = document.querySelectorAll('[data-form]')

form.forEach( (element) => {
    element.addEventListener('submit', (event) => {
        event.preventDefault()

        const alvo = element.attributes[0].nodeValue

        const quantidadeCookie = numeroDeCookies(`[data-quantidade="${alvo}"]`)
        const item = encontraInformacoes(`[data-titulo="${alvo}"]`)

        const precoCookie = Number(quantidadeCookie) * Number(item?.preco)

        if (precoCookie === NaN){
            console.log('quantidade de cookies inválida')
        } else {
            console.log(`O preço dos cookies ${item?.nome} é ${precoCookie}`)
        }     
    })
})



function encontraInformacoes (seletor: string) {
    const inptItem = document.querySelector(seletor) as HTMLInputElement
    const item = inptItem.textContent
    const encontra = lista.find( cookie => cookie.nome == item)
    return encontra
}