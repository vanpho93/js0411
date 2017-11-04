// console.log(Math.random()); // [0, 1)
// console.log(Math.round(1.6));
// console.log(Math.ceil(1.01));
// console.log(Math.floor(1.9));

function add(a, b) {
    return a + b;
}
// console.log(add(10, 1));
// 0 - 9
function getRandom(min, max) {
    const a = Math.random() * (max - min + 1);
    return Math.floor(a) + min;
}

console.log(getRandom(0, 9));
