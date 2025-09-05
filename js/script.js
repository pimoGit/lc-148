// selezioniamo l'input
const field = document.getElementById('username');
// selezioniamo il bottone
const button = document.querySelector('button');
// selezioniamo il blocco di output
const mioPar = document.getElementById("mioP");


// getione evento bottone
button.addEventListener("click",
    () => {
        const nameValue = field.value.trim();
        if (nameValue) {
            // Marco
            // console.log(nameValue);
            mioPar.innerText = nameValue;
            field.value = "";
        }
    })


