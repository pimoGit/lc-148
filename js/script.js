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
    } else {
        mioParagrafo.classList.add("textgreen");
    }

    console.log(mioParagrafo.classList);

}