const sabores = [];
const inptCheck = document.querySelectorAll('[data-check]');
const massa = inptCheck.forEach((element) => {
    element.addEventListener('click', function (event) {
        const sabor = (element.attributes[3].value);
        console.log(sabor);
    });
});
