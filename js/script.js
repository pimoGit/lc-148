//  selezioniamo gli elemnti di output e interazione dalla page
const progressBar = document.querySelector(".progress-bar");
const uploadButton = document.getElementById("upload-button");
const outputMsg = document.getElementById("message");


// logica di gestione click su bottone Upload
uploadButton.addEventListener("click",
    function () {

        // disabilito il bottone
        uploadButton.disabled = true;

        // inizializziamo contatore
        let progress = 0;
        let progressOutput = progress + "%";

        // usiamo i valori per modificare il DOM
        progressBar.innerText = progressOutput;
        progressBar.style.width = progressOutput;

        // simulazione upload (temporale)
        const progInterval = setInterval(() => {
            if (progress === 100) {
                clearInterval(progInterval);

                // gestisco messaggio
                outputMsg.classList.remove("d-none");
                // tolgo bottone
                uploadButton.classList.add("d-none");
            } else {

                // incrementiamo il valore di output
                progressOutput = ++progress + "%";

                // usiamo i valori per modificare il DOM
                progressBar.innerText = progressOutput;
                progressBar.style.width = progressOutput;
            }

        }, 100);

    }
);