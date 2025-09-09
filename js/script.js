const palla = {
    "colore": ['red', 'blue'],
    'tipo': 'pallina da golf',
    "peso": 40,
};

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

