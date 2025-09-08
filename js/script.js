// selezioniamo gli elementi di pagina
const pageDisplay = document.getElementById("display");
const startButton = document.querySelector(".btn-success");
const stopButton = document.querySelector(".btn-danger");

// setto variabile di ref al interval
let timer;

// logica del bottone start
startButton.addEventListener("click",
    function () {

        // gestiamo abilità dei bottoni
        startButton.disabled = true;
        stopButton.disabled = false;

        // variabile di conteggio
        let count = 0;

        // incrementiamo il contatore del tempo
        timer = setInterval(() => {
            // incremento e output
            // count++;
            pageDisplay.innerText = ++count;
        }, 1000);
    }
);

// logica del bottone stop
stopButton.addEventListener("click",
    function () {

        // gestiamo abilità dei bottoni
        startButton.disabled = false;
        stopButton.disabled = true;

        // concludo l'esecuzione del timer
        clearInterval(timer);
    }
);