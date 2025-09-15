// selezioniamo l'elelemnto di output
const resultOutput = document.getElementById("result");
const endPointNumber = "https://flynn.boolean.careers/exercises/api/random/int";

// andiamo a fare la chiamata AJAX con axios
axios.get(endPointNumber)
    .then(risposta => {
        //codice da eseguire in caso di successo
        const result = risposta.data.response;
        console.log(result);

        resultOutput.innerText = result;

    })
    .catch(error => {
        // codice da eseguire in caso di errore
        console.error(error)
    })

// NON POSSO METTERLO FUORI DAL THEN
// resultOutput.innerText = result;