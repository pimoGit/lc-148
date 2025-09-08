function numRandomGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log(numRandomGen(10, 50));


// funzione che genera un array di tot numeri in un range
function arrayUniqueNumbers(numMin, numMax, numberElemnts) {
    // mi creo un array vuoto di partenza

    // ciclo l'array creato FINO CHE è più corto di numberElemnts
    // genero un numero random in un range
    let nuovoNumero = numRandomGen(numMin, numMax);

    // verifico se nuovoNumero è già incluse nell'array creato
    // SE NON è vero
    // lo pusho nell'array creato


    // ritorno l'array creato
}


// arrayUniqueNumbers(10, 50, 5);



// ESEMPIO SELETTORI
const mioLi = document.querySelectorAll("li");
console.log(mioLi);


for (let i = 0; i < mioLi.length; i++) {
    let elementoLi = mioLi[i];
    elementoLi.innerText = "Ciao" + i;
}

mioLi[3].innerText = "vado via";