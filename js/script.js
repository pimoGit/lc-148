// gioco pari e dispari (1 - 5)


// INPUT
// chiedo user un numero nel range
const userNumber = parseInt(prompt("inserisci un numero tra 1 e 5"));
console.log("numero user:", userNumber);

// chiedo user puntata (pari/dispari)
const userBet = prompt("scegli tra 'pari' e 'dispari'");
console.log("scelta user:", userBet);

// genero numero PC nel range
const pcNumber = Math.floor(Math.random() * 5) + 1;
// const pcNumber = 3;
console.log("numero pc:", pcNumber);


// ELABORAZIONE
// sommiamo i due numeri
const result = userNumber + pcNumber;
console.log("la somma è:", result);


// check su somma (se pari o dispari)
let checkResult;

if (result % 2 === 0) {
    checkResult = "pari";
} else {
    checkResult = "dispari";
}

console.log("il check del risultato è:", checkResult);


// check su segno somma con puntata user
if (checkResult === userBet) {
    console.log("hai vinto! Bravissimo!");
} else {
    console.log("hai perso ma sei stao bravo lo stesso");
}