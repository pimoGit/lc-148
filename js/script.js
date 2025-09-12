const students = [
    {
        id: 1,
        name: 'Luca Bianchi',
        age: 32,
        className: '3C',
        vote: 9
    },
    {
        id: 2,
        name: 'Andrea Rossi',
        age: 18,
        className: '4A',
        vote: 7
    },
    {
        id: 3,
        name: 'Giovanni Verdi',
        age: 33,
        className: '5B',
        vote: 7
    },
    {
        id: 4,
        name: 'Francesco Esposito',
        age: 25,
        className: '5B',
        vote: 7
    },
    {
        id: 5,
        name: 'Matteo Ferri',
        age: 57,
        className: '5B',
        vote: 10
    },
];

// Stampa in console i nomi di tutti gli studenti
students.forEach((student) => {
    console.log(student.name);
});

// Crea un array con la lista  di tutti i nomi degli studenti
const studentsName = students.map((student) => {
    return student.name
});

console.log(studentsName);


// Crea un array che contenga solo gli studenti dai 30 anni in su
const over30Students = students.filter(student => student.age >= 30);

console.log(over30Students);


// Trova lo studente con id 4
const quartoStudente = students.find((student) => {
    return student.id === 4;
});

console.log(quartoStudente);
