const createMyElement = (tag, text, ...classes) => {
    // creo il nuovo elemento in base al tag passato
    const newElement = document.createElement(tag);
    // inserisco il testo passato nel tag creato
    newElement.append(text);
    // aggiungo le classi all'elemento
    newElement.classList.add(...classes);
    return newElement
}

console.log(createMyElement("h2", "ciao sono un titolo", "classe1", "classe2", "classe3"));


const elementOutput = document.getElementById("output");

const nuovoElemento = createMyElement("h2", "ciao sono un titolo", "classe1", "classe2", "classe3");

const nuovoElementoDue = createMyElement("p", "ciao sono unparagrafo", "classeparagrafo");

elementOutput.appendChild(nuovoElemento);
elementOutput.appendChild(nuovoElementoDue);