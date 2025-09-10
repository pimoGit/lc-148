const student = {
    "name": 'Paolo',
    "age": 30,
    "email": 'paolo@email.it'
};

// const username = student.name;
// const email = student.email;

const { name: userName, email } = student;
console.log(userName, email);
//Otteniamo: Paolo, paolo@email.it

const template = `<div>
<p>Nome: ${userName}</p>
<p>Email: ${email}</p>
</div>`


// versione sugli array
const myArray = [1, 2, 3, 4, 5, 6, 7];

// const firstNumber = myArray[0];
// const secondNumber = myArray[1];
//  const fifthNumber = myArray[4];

const [firstNumber, secondNumber, , , fifthNumber] = myArray;



console.log(firstNumber, secondNumber, fifthNumber);
