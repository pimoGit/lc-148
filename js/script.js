const palla = {
    "colore": ['red', 'blue'],
    'tipo': 'pallina da golf',
    "peso": 40,
};

const nuovaPalla = {};

// settaggio di valore esistente
palla.peso = 50;
// palla["peso"] = 60;

//creare una nuova prop con valore 
palla.brand = "newBall";
// palla["brand"] = "newBall";


console.log(palla);



// differenza tra le due notazioni
/*
const inputUser = prompt("di quale propietà vuoi il valore?");


console.log(palla.inputUser); //'pallina da golf'



console.log(palla[inputUser]); //'pallina da golf'
*/

// aggiunta ciclo FOR IN


for (let key in palla) {
    console.log(key, palla[key]);
}



// Risultato atteso: 
// 12
// pallina da golf
// non per forza in questo ordine