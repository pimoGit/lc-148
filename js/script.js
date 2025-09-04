// chiediamo nome a User e diamo output colorato a seconda del sesso

// SELEZIONE
const outputEl = document.getElementById("output");
console.log(outputEl);


// INPUT
// chiediamo il nome allo User
const nome = prompt("inserisci il tuo nome");

// // chiediamo il sesso allo User
const geneder = prompt("Sei unomo o donna? (M/F)");

// vado a definire il colore del testo
// let nameColor;
// if (geneder === "M") {
//     nameColor = "blue";
// } else {
//     nameColor = "pink";
// }

const nameColor = geneder === "M" ? 'blue' : "pink";


// facciamo output come User
outputEl.innerHTML = "Ciao " + nome;
outputEl.style.color = nameColor;