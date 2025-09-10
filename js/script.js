let name = 'Paolo';
let ageValue = 30; // NOT age
let email = 'paolo@email.it';

const nameKey = 'age'; // Ora qui non c’è ambiguità

const student = {
    name: name,
    [nameKey]: ageValue,  // NOT age
    email: email
};

console.log(student);
