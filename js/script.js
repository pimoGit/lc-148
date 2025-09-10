const obj = { name: 'palla', peso: 50 };
//{name: "palla", peso: 50, colore: "blue"}

// const name = obj.name;
// const peso = obj.peso;


// const copyObj = {
//     name,
//     peso,
//     colore: "blue"
// };


// copio solo un ref allo stesso oggetto
// const copyObj = obj;

// creo un clone su un oggetto nuovo
const copyObj = { ...obj, altraprop: "valore" };



obj.nuovaprop = "valore";

console.log(copyObj);

// esempio su array
const mioArray = [1, 2, 4, 45, 5];
const mioArray2 = [12, 22, 33, 444, 55];


// in realtà copio solo il ref
// const arrayClone = mioArray;

// creo un vero e proprio clone
const arrayClone = [...mioArray];
const concatArrays = [...mioArray, ...mioArray2];

mioArray.push(77);

console.log(concatArrays);


