class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // static marry(p1, p2) {
    //     console.log(this.name);
    //     console.log(`${p1.name} and ${p2.name} were married`);
    // }

    sayHello() {
        console.log(typeof this);
        console.log('Hello, I am ' + this.name);
    }
}
// function marry(p1, p2) {
//     console.log(`${p1.name} and ${p2.name} were married`);
// }
Person.marry = function(p1, p2) {
    console.log(this.name);
    console.log(`${p1.name} and ${p2.name} were married`);
};

const teo = new Person('Teo', 10);
const ti = new Person('Ti', 10);
// ti.sayHello();
Person.marry(teo, ti);

const a = teo.sayHello;

console.log(typeof Person);

// function incrAge() {
//     this.age++;
// }

// teo.a = incrAge;

// teo.a();
// console.log(teo);
