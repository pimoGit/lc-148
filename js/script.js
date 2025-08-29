// da array di numeri vogliamo stampare solo i numeri dispari

// dichiarazione e valorizzazione dell'array
const numbers = [10, 15, 2, 33, 55, 20, 22];

// numbers.push(7, 12, 11, 91);


// andiamo a traversare l'array
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];

    // andiamo a distinguere l'output per stampare solo i dispari
    if (num % 2 !== 0) {
        console.log(num);
    }
}


numbers.push(7, 12, 11, 91);

