class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log('Hello, I am ' + this.name);
    }
}

class Child extends Person {
    constructor(name, age, toy) {
        super(name, age);
        this.toy = toy;
    }

    sayHey() {
        console.log('Hey! ' + this.name);
    }

    sayHello() {
        super.sayHello();
        console.log('Hi, I am ' + this.name + ', I am playing ' + this.toy);
    }
}

const teo = new Child('Teo', 10, 'Auto');
teo.sayHello();
teo.sayHey();
console.log(teo);
