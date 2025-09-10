function somma(num1, num2) {
    return num1 + num2;
}


function sommaTutto(...numeri) {
    let somma = 0;
    for (let index = 0; index < numeri.length; index++) {
        const numero = numeri[index];
        somma += numero;
    }

    return somma

}

console.log(somma(7, 10), somma(12, 20, 33));


console.log(sommaTutto(3, 6, 10, 1));
