export function numeroDeCookies(seletor) {
    const quantidade = document.querySelector(seletor);
    const cookies = Number(quantidade.value);
    if (cookies > 0) {
        quantidade.value = '';
        return cookies;
    }
    else {
        quantidade.value = '0';
        alert("Quantidade de cookies inválida");
        return 0;
    }
}
