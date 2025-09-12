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