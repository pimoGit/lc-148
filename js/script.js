const people = [
    { id: 4, name: 'Paolo', age: 32 },
    { id: 3, name: 'Clelia', age: 34 },
];

// trova la person con id 3
const myPerson = people.find((person) => {
    return person.id === 3;
});


console.log(myPerson);


//RISULTATO: { id: 3, name: 'Clelia', age: 34 }
