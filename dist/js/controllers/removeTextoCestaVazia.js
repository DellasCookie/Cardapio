import { cesta } from "../app.js";
export function removeTextoCestaVazia() {
    const cestaVazia = document.querySelector('[data-cestaVazia]');
    if (cesta.length > 0) {
        cestaVazia.textContent = '';
    }
}
