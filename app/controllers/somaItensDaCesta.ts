export function somaItensDaCesta(cesta: number[]){
    const campoValorTotal = document.querySelector("[data-precoTotal]") as HTMLElement
    let somatorio = cesta.reduce( (valorItem, soma): number => valorItem + soma, 0)
    campoValorTotal.innerHTML = `R$ ${somatorio.toFixed(2)}`
}
