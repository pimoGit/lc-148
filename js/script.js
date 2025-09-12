const numeri = [1, 2, 3, 4, 5];

const quadrati = numeri.map(numero => {
    return numero * numero;
});

console.log("array originale", numeri);
console.log(quadrati); // [1, 4, 9, 16, 25]


// versione FOR
const quadrati2 = [];

for (let index = 0; index < numeri.length; index++) {
    const numero = numeri[index];

    quadrati2.push(numero * numero);
}

console.log(quadrati2);

