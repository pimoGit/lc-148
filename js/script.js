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