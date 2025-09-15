// selezione delgli elementi di output
const play1 = document.getElementById("player1Output");
const play2 = document.getElementById("player2Output");
const resultOutput = document.getElementById("message");

// settiamo costante per ednpoint di API
const min = 1;
const max = 6;
const nItems = 2;
const endPointApi = `https://flynn.boolean.careers/exercises/api/array/integers?min=${min}&max=${max}&items=${nItems}`;

// chiamata AJAX
axios.get(endPointApi)
    .then(rispApi => {
        //codice da eseguire in caso di successo
        const result = rispApi.data.response;
        console.log(result);

        // estrapolo valori per utilizzo distinto
        // const playNumber1 = result[0];
        // const playNumber2 = result[1];
        const [playNumber1, playNumber2] = result;

        // output dei due numeri
        play1.innerHTML = `Il nunero uscito per il giocatore Uno è ${playNumber1}`;
        play2.innerHTML = `Il nunero uscito per il giocatore Due è ${playNumber2}`;

        // costruzione del messaggio finale del risultato
        let messageOutput = "Avete opareggiato";

        if (playNumber1 > playNumber2) {
            messageOutput = "Ha vinto il giocatore Uno";
        } else if (playNumber1 < playNumber2) {
            messageOutput = "Ha vinto il giocatore Due";
        }

        resultOutput.innerHTML = messageOutput;

    })
    .catch(error => {
        // codice da eseguire in caso di errore
        console.error(error)
    })