/*

1. In ra cac so chan trong khoang tu 0 ... 100
2. In ra cac so le trong khoang tu 0 ... 100
3. In ra cac so chia 3 du 1 trong khoang tu 0 ... 100
4. In ra cac so chinh phuong trong khoang tu 0 ... 100

*/

function inSoChan() {
    for(let i = 0; i <= 100; i += 2) console.log(i);
}

function inSoLe() {
    for(let i = 1; i <= 100; i += 2) console.log(i);
}

function inSoChia3Du1() {
    for(let i = 1; i <= 100; i += 3) console.log(i);
}

function inSoChinhPhuong() {
    for(let i = 1; i <= 10; i += 1) console.log(i * i);
}

inSoChinhPhuong();
