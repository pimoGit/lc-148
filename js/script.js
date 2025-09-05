// selezioniamo l'input
const field = document.getElementById('username');
// selezioniamo il bottone
const button = document.querySelector('button');
// selezioniamo il blocco di output
const mioPar = document.getElementById("mioP");
// seleziono l'emeneto form
const mioForm = document.querySelector('form');



// getione evento bottone
mioForm.addEventListener("submit",
    (event) => {
        // Blocco l'invio del form..
        event.preventDefault();

        // fai quello che devi
        const nameValue = field.value.trim();
        if (nameValue) {
            // Marco
            // console.log(nameValue);
            mioPar.innerText = nameValue;
            field.value = "";
        }
    })


