function Person(ten, tuoi) {
    this.name = ten;
    this.age = tuoi;
    this.sayHello = function() {
        console.log('Hello, I am ' + this.name);
    }
}

const tun = new Person('Tun', 12);
const teo = new Person('Teo', 10);
const ti = new Person('Ti', 9);
