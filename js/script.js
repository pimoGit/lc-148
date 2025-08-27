// cricevendo in input due stringhe, andiamo a dire quale delle due è più lunga



// PASSAGGI LOGICI:

let messaggio;

// input: prendiamo i valori delle due strighe
const parola1 = prompt("inserisci la prima parola");
const parola2 = prompt("inserisci la seconda parola");

console.log(parola1, parola2);



// elaborazione: confrontiamo la lunghezza delle stringhe (maggiore, minore o uguale)
if (parola1.length > parola2.length) {
    messaggio = "parola 1 è più lunga";
} else if (parola1.length < parola2.length) {
    messaggio = "parola 2 è più lunga";
} else {
    messaggio = "le due parole sono lunghe uguali";
}

// output: che descrive quale parola sia più lunga
console.log(messaggio);
