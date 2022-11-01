const inputPrice = document.querySelector('#price');
//const inputDiscount = document.querySelector("#discount");
const btn15 = document.querySelector('#calcular15');
const btn25 = document.querySelector('#calcular25');
const btn50 = document.querySelector('#calcular50');
const pResult = document.querySelector('#result');

btn15.addEventListener('click',calcularDescuento15);
btn25.addEventListener('click',calcularDescuento25);
btn50.addEventListener('click',calcularDescuento50);

    // (Precio * 100 (100 - Descuento) / 100)

    function calcularDescuento15(){
        const price = inputPrice.value;
       // const discount = inputDiscount.value;
       const CalcularDesc15 = calcular15.value;

        const newPrice = (price * (100 - 15)) / 100;

        pResult.innerText = 'El nuevo precio con descuento es: $' + newPrice;
    }

    function calcularDescuento25(){
        const price = inputPrice.value;
       // const discount = inputDiscount.value;
       const CalcularDesc25 = calcular25.value;

        const newPrice = (price * (100 - 25)) / 100;

        pResult.innerText = 'El nuevo precio con descuento es: $' + newPrice;
    }

    function calcularDescuento50(){
        const price = inputPrice.value;
       // const discount = inputDiscount.value;
       const CalcularDesc50 = calcular50.value;

        const newPrice = (price * (100 - 50)) / 100;

        pResult.innerText = 'El nuevo precio con descuento es: $' + newPrice;
    }