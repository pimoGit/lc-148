const numeri = [1, 2, 3, 4, 5];

const primoNumeroPari = numeri.find((numero) => {
    return numero % 2 === 0;
});

console.log(primoNumeroPari); // 2