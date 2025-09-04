// SELEZIONE
const mioParagrafo = document.querySelector(".myParagraph");
console.log(mioParagrafo);

const mioBottone = document.getElementById("myButton");
console.log(mioBottone);

// gestiamo evento su bottone
mioBottone.addEventListener('click',
    cambiaColore
);


function cambiaColore() {
    // check se presente già classe aggiuntiva
    const isGreen = mioParagrafo.classList.contains("textgreen");
    if (isGreen) {
        mioParagrafo.classList.remove("textgreen");
        mioParagrafo.innerText += "Altro testo";
    } else {
        mioParagrafo.classList.add("textgreen");
    }

    console.log(mioParagrafo.classList);

}

function cambiaColoreToggle() {
    // check se presente già classe aggiuntiva
    mioParagrafo.classList.toggle("textgreen");

    console.log(mioParagrafo.classList);

}