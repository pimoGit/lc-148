const list = document.querySelector(".list");

const names = ['Qui', 'Quo', 'Qua'];


/* 
let items = '';

for (let i = 0; i < names.length; i++) {
    items += `<li>${names[i]}</li>`;
    // list.innerHTML += `<li>${names[i]}</li>`;
    // console.log("siamo all'iterazione numero", i, items);

}

list.innerHTML = items;
*/

// versione createElement

for (let i = 0; i < names.length; i++) {
    const newLi = document.createElement('li');
    newLi.append(names[i]);
    list.appendChild(newLi);
}