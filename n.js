class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log('Hello, I am ' + this.name);
    }
}
// 1. Mo rong gian tiep - 2. Mo rong truc tiep
const teo = new Person('Teo Nguyen', 10);
const ti = new Person('Ti Nguyen', 10);

Person.prototype.sayHey = function() {
    console.log('Hey! ' + this.name);
}

teo.sayHello();
teo.sayHey();
ti.sayHey();

teo.phoneNumber = '012391923';
teo.getName = function() {
    return 'Teo';
}

console.log(teo.phoneNumber);
console.log(ti.phoneNumber);
console.log(teo.getName());