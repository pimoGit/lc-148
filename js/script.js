
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// - il prezzo del biglietto è definito in base ai km (0.21 € al km) 
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// INPUT
// prendo le info necessarie dallo USER (età e km)
const userAge = parseInt(prompt("inserisci la tua età"));
const userKm = parseInt(prompt("inserisci i KM"));
// variabili di riferimento (sconti, messaggio)
const scontoMinorenne = 20;
const scontoover65 = 40;
const priceKm = 0.21;

let messaggio = "il prezzo del biglietto é: ";


// CALCOLO
// costo base
let price = priceKm * userKm;
console.log(price);
// valorizzazione messaggio base
messaggio = messaggio + price.toFixed(2) + "€";




// SE user minorenne
// applico sconto del 20
if (userAge < 18) {
    price = price * 0.8;
    // price = price - (price * 0.2)
    messaggio = "Hai diritto ad uno sconto del 20 e il prezzo del biglietto é: " + price.toFixed(2) + "€";
} else if (userAge > 65) {
    // SE user over 65
    // applico sconto del 40
    price = price * 0.6;
    // price = price - (price * 0.4)
    messaggio = "Hai diritto ad uno sconto del 40 e il prezzo del biglietto é: " + price.toFixed(2) + "€";
}


// OUTPUT (prezzo e messaggio)
console.log(messaggio);
