import { listaDaCesta } from "../app.js";
export function finalizaCompra(){
    const botaoFinaliza = document.querySelector('[data-finalizaCompra]')
    botaoFinaliza?.addEventListener('click', function() {
        const textoCopiado = document.querySelector('[data-textoCopiado]') as HTMLElement
        const copia = textoCopiado.textContent as string
        navigator.clipboard.writeText(copia)
          
        
    })
    
    console.log(listaDaCesta)
}