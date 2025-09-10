const student = {
    "name": 'Paolo',
    "age": 30,
    "email": 'paolo@email.it'
};

// const name = student.name;
// const email = student.email;

const { name, email } = student;
console.log(name, email, ciao);
//Otteniamo: Paolo, paolo@email.it

const template = `<div>
<p>Nome: ${name}</p>
<p>Email: ${email}</p>
</div>`