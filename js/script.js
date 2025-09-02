const valore1 = 3;


const result1 = checkPariDispari(valore1);
const result2 = checkPariDispari(6);

console.log(result1, result2);


console.log("esecuzione funzione randomNum:", randomNum(5, 20));









// FUNZIONI

// funzione di check di un numero se pari o dispari
function checkPariDispari(numero) {

    let risultato;

    if (numero % 2 === 0) {
        risultato = "pari"
    } else {
        risultato = "dispari"
    }

    return risultato
}

// funzione di creazione numero random in un range
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}