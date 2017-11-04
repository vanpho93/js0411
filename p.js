const person = { name: 'a', age: 10 };

// console.log(person.name.x.y); error
// console.log(null.x) error
const { name, age } = person; // destructuring
// const name = person.name;
// const age = person.age;
console.log(name, age);
