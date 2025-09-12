const numeri = [1, 2, 3, 4, 5, 8, 10, 13];

const pari = numeri.filter((numero) => {
    // if (numero % 2 === 0) {
    //     return true;
    // }
    // return false;

    return numero % 2 === 0
});

console.log(numeri, pari); // [2, 4]



// versione con FOR
const pari2 = [];
for (let index = 0; index < numeri.length; index++) {
    const numero = numeri[index];

    if (numero % 2 === 0) {
        pari2.push(numero);
    }
}

console.log(pari2);
