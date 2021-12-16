//Problem

let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// let person1=person;
// person.firstName="Avaneesh";

// console.log(person1);
// console.log(person);

//Solution

//let person1={...person}//SHALLOW COPY
let person1=JSON.parse(JSON.stringify(person));//DEEP COPY
person.firstName="Avaneesh";

person.age=30;
console.log(person1);
console.log(person);


