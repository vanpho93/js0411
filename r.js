class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log('Hello, I am ' + this.name);
    }

    // computed props
    get yearOfBirth() {
        return 2017 - this.age;
    }

    set yearOfBirth(value) {
        this.age = 2017 - value;
    }
}

const teo = new Person('Teo Nguyen', 10);
teo.yearOfBirth = 2000;
console.log(teo.yearOfBirth);
