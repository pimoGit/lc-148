// funzione di saluto
function saluto() {
    console.log("Ciao a tutti!");
}




// versione arrow
const saluto1 = () => console.log("Ciao a tutti! arrow!!");

console.log(saluto1);
saluto1();

saluto();


// Funzione tradizionale
function sum(a, b) {
    return a + b;
}

// versione arrow
const sum1 = (a, b) => {
    return a + b;
}

// versione arrow compatta
const sum2 = (a, b) => a + b;


// Funzione tradizionale
function isEven(number) {
    return number % 2 === 0;
}

// versione arrow
const isEven1 = (number) => {
    return number % 2 === 0;
}

// versione arrow compatta
const isEven2 = number => number % 2 === 0;

