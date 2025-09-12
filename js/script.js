const cats = [
    { name: 'Jerry', color: 'Gray' },
    { name: 'Felix', color: 'Black and White' },
    { name: 'Garfield', color: 'Orange' },
];

cats.forEach((element) => {
    console.log(`
        ${element.name}'s color is ${element.color}
        `);
});


// versione FOR
for (let index = 0; index < cats.length; index++) {
    const element = cats[index];

    console.log(`
        ${element.name}'s color is ${element.color}
        `);
}





// ESEMOPIO DI METODI E NESSUNA MAGIA NERA SU JS
function forEach(element, index, array) {

    myObj.myfunct1();

    push()

    return undefined
}


const myObj = {
    prop1: "valore",
    prop2: 3,
    myfunct1() {
        // fai qualcosa
    }
}

myObj.prop1;
myObj.prop2;

myObj.myfunct1();