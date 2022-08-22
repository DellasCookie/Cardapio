export function somaItensDaCesta(cesta) {
    const campoValorTotal = document.querySelector("[data-precoTotal]");
    let somatorio = cesta.reduce((valorItem, soma) => valorItem + soma, 0);
    campoValorTotal.innerHTML = `R$ ${somatorio.toFixed(2)}`;
}
