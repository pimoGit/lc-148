// ricevendo in input due età (numeri), andiamo a dire quale delle due è alta



// PASSAGGI LOGICI:

// inizializzazione variabili globali
let messaggio;

// input: prendiamo i valori delle due strighe
const eta1 = parseInt(prompt("inserisci la prima età"));
const eta2 = parseInt(prompt("inserisci la seconda età"));



console.log(eta1, eta2);



// elaborazione: confrontiamo la lunghezza delle stringhe (maggiore, minore o uguale)
if (eta1 > eta2) {
    messaggio = "età 1 è più alta";
} else if (eta1 < eta2) {
    messaggio = "età 2 è più alta";
} else {
    messaggio = "le due età sono uguali";
}

// output: che descrive quale parola sia più lunga
console.log(messaggio);
