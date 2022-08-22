export function numeroDeCookies(seletor: string){
    const quantidade = document.querySelector(seletor) as HTMLInputElement
    const cookies: number = Number(quantidade.value)
    if (cookies > 0) {
        quantidade.value = ''
        return cookies
    } else {
        quantidade.value = '0'
        alert("Quantidade de cookies inválida")
        return 0
    }

}