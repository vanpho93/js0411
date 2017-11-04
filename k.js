const person = { name: 'Teo', age: 10 };

const person2 = { name: 'Teo', age: 10 };
const person3 = person;

person3.age = 100;
/*
    Khi so sanh cac gia tri thuoc kieu du lieu nguyen thuy - chi la so sanh gia tri
*/
/*
    Voi object, cac ban dang kiem tra xem no co phai la 1 hay khong
*/

// console.log(person.name)
// person.age = 12;
// console.log(person);

let a = 5;
let b = 5;
console.log(a == b);
console.log(person == person3);
console.log(person);
