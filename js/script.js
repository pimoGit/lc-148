const valore1 = 3;


const result1 = checkPariDispari(valore1);
const result2 = checkPariDispari(6);

console.log(result1, result2);


console.log("esecuzione funzione randomNum:", randomNum(5, 20));

const text1 = "qualsiasi";

console.log(reverseWord(text1));

const userWord = prompt("inserisci una parola") // Arrivederci


// console.log(word1.toUpperCase());

const parolaCapitalizzata = capitalizeWord(userWord);
console.log("il risultato della funzione di capitalize è:", parolaCapitalizzata);



// FUNZIONI

// funzione di check di un numero se pari o dispari
function checkPariDispari(numero) {

    let risultato;

    if (numero % 2 === 0) {
        risultato = "pari"
    } else {
        risultato = "dispari"
    }

    return risultato
}

// funzione di creazione numero random in un range
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// funzione di revert parola
function reverseWord(word) {
    // var di stringa revertata
    let revertedWord = "";

    // ciclo la stringa
    for (let i = word.length - 1; i >= 0; i--) {
        let letteraIesima = word[i];
        // console.log(letteraIesima);
        // revertedWord = revertedWord + letteraIesima;
        revertedWord += letteraIesima;
    }

    // alternativa al FOR
    // let revertedWord = word.split("").reverse().join("");

    return revertedWord
}

// funzione che ritorna una stringa capitalizzata (solo prima lettera maiuscola)
function capitalizeWord(word) {
    // estraggo la prima lettera e  la rendo maiuscola
    const firstLetter = word[0].toUpperCase();
    // console.log("prima lettera da funzione di capitalize:", firstLetter);
    // // la rendo maiuscola
    // let firstLetterCap = firstLetter.toUpperCase();
    // console.log("prima lettera da funzione di capitalize, maiuscola:", firstLetterCap);


    // estraggo il resto della parola
    const restWord = word.substring(1);

    // compongo la stringa finale
    const result = firstLetter + restWord;
    // ritorno il valore composto
    return result

}