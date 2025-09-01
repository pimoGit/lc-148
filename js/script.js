const cities = ['London', 'Shanghai', 'New York', 'Delhi', 'Kuala Lumpur'];
const names = [];
const numbers = [1, 2, 3];
const colours = ['Red', 'Blue', 'Yellow'];
const keys = ['q', 'w', 'e', 'r', 't', 'y'];
const countries = ['Bolivia', 'Jordan', 'Greenland'];
const fruits = ['Apple', 'Orange', 'Pear'];

// 1. Aggiungi Fred all'array names
names.push("Fred");
console.log(names);

// 2. Aggiungi 4 alla fine dell'array numbers
numbers.push(4);
console.log(numbers);

// 3. Aggiungi Rio all'inizio dell'array cities
cities.unshift("Rio");
console.log(cities);

// 4. Rimuovi il primo colore dall'array colours
colours.shift();
console.log(colours);

// 5. Rimuovi l'ultimo elemento dall'array keys
keys.pop();
console.log(keys);

// 6. Rimuovi l'ultimo frutto dall'array fruits e memorizzalo in pear qui sotto
let pear = fruits.pop();
console.log(fruits, "il valore estratto è: ", pear);



// 7. Rimuovi Jordan dall'array countries
// mi ricavo l'indice dell'emento da cancellare
const elementIndex = countries.indexOf('Jordan');
console.log(elementIndex);
// dopo un check su esistenza dell'emento lo cancello
if (elementIndex > -1) { // only splice array when item is found
    countries.splice(elementIndex, 1); // 2nd parameter means remove one item only
}

console.log(countries);



/*
 JSnack 5
 Crea un array vuoto. 
 Chiedi per 6 volte all’utente di inserire un numero, 
 se è dispari inseriscilo nell’array
*/

// inizializzo array vuoto
const arrayNumeri = [];

// ciclo per 6 volte
for (let i = 0; i < 6; i++) {

    // input user
    const nuovoNumero = parseInt(prompt('Inserisci un nuovo numero'));
    console.log(nuovoNumero);

    // se inputUser è dispari lo pusho
    if (nuovoNumero % 2 != 0) {
        arrayNumeri.push(nuovoNumero);
    }
}

// output
console.log('I numeri dispari che hai inserito sono: ' + arrayNumeri);






