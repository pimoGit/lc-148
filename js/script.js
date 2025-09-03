// lista di invitati
const invitati = ["invitato1", "invitato2", "invitato3", "invitato4"];

// input utente da checkare
const userCheck = prompt('inserisci la tua email');

console.log("check array invitati:", isInArray(userCheck, invitati));

const numbers = [1, 2, 3, 4, 5, 6, 7];

let myNumber = 7;

console.log("check array numeri:", isInArray(8, numbers));



/*
// creo una variabile di stato (trovato vero/falso)
let trovato = false;

// cerchiamo
for (let i = 0; i < invitati.length; i++) {

    // variabile che contiene ad ogni iterazione un el dell'arr
    let invitato = invitati[i];
    console.log(invitato, i);

    // faccio check di presenza invitato
    if (invitato === userCheck) {
        trovato = true;
    }

}

console.log(trovato);
*/


// funzione di check elemnto in array
function isInArray(inpuValue, arrayToCheck) {
    // creo una variabile di stato (trovato vero/falso)
    let trovato = false;

    // cerchiamo
    for (let i = 0; i < arrayToCheck.length; i++) {

        // variabile che contiene ad ogni iterazione un el dell'arr
        let arrayElement = arrayToCheck[i];
        // console.log(arrayElement, i);

        // faccio check di presenza invitato
        if (arrayElement === inpuValue) {
            trovato = true;
        }

    }

    return trovato
}
