// dichiarazione variabile
let firstName, altraVar, nuovaVar;

// assegnazione valore
firstName = "Simone";

// dichiarazione e assegnazione
const piGreco = 3.14;

// stringhe
const userName = "Mario";
const userSurname = 'Rossi';
// versione concatenata
const fullName = userName + " " + userSurname;
// versione template literal
const fullName2 = `Benvenuto ${userName} ${userSurname} 
e buona giornata!`;
console.log("il valore di fullName è: " + fullName);
console.log("il valore di fullName2 è:", fullName2);

// Numeri
let numero1 = 7;
let numero2 = 3;
let numeroStringa = "dieci";

let somma = numero1 + numero2;

console.log("valore di somma", somma);

let sommaSbagliata = somma + numeroStringa;

console.log("valore di sommaSbagliata", sommaSbagliata);


let prodotto = somma * numeroStringa;

console.log("valore di prodotto", prodotto);

// uso proprietà e metodi 
const numeroDaFissare = 0.12345;
const risultato = numeroDaFissare.toFixed(3);
console.log(risultato);

console.log(0.12345.toString());



