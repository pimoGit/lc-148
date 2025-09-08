// selezione dell'elemento di output
const outputDisplay = document.getElementById("display");
console.log(outputDisplay);

// settiamo i valori di partenza
let seconds = 10;
outputDisplay.innerText = seconds--;


// settiamo l'intervallo in cui deve avvenire il conteggio
const intervalId = setInterval(function () {
    // SE sono alla fine 
    if (seconds === 0) {
        // allora invio auguri e fermo l'esecuzione
        outputDisplay.innerText = "Buon annooooo!!!!";
        clearInterval(intervalId);
    } else {
        // ALTRIMENTI
        // decremento il contatore
        // e stampo il valore in pagina (output)
        outputDisplay.innerText = seconds--;
    }

}, 1000);


console.log("una cosa sincrona");
