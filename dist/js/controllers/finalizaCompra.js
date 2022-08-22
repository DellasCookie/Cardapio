import { listaDaCesta } from "../app.js";
export function finalizaCompra() {
    const botaoFinaliza = document.querySelector('[data-finalizaCompra]');
    botaoFinaliza === null || botaoFinaliza === void 0 ? void 0 : botaoFinaliza.addEventListener('click', function () {
        const textoCopiado = document.querySelector('[data-textoCopiado]');
        const copia = textoCopiado.textContent;
        navigator.clipboard.writeText(copia);
    });
    console.log(listaDaCesta);
}
