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
    mioParagrafo.classList.add("textgreen");
}