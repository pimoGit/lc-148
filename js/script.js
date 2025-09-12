const students = [
    { firstName: 'Mario', lastName: 'Rossi' },
    { firstName: 'Luigi', lastName: 'Verdi' },
    { firstName: 'Margherita', lastName: 'Bianchi' }
];


// ["Mario Rossi", ...]

const names = students.map(student => {
    return student.firstName + " " + student.lastName;
});

console.log(students, names);


// versione forEach
const names2 = [];
students.forEach((student) => {
    names2.push(student.firstName + " " + student.lastName);
});

console.log(names2);
