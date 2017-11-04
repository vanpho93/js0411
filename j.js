/*

1. In ra cac so chan trong khoang tu 0 ... 100
2. In ra cac so le trong khoang tu 0 ... 100
3. In ra cac so chia 3 du 1 trong khoang tu 0 ... 100
4. In ra cac so chinh phuong trong khoang tu 0 ... 100
5. In ra cac so thoa man dieu kien gi do trong khoang tu 0 - 100
*/

function inSoChan() {
    for(let i = 0; i <= 100; i += 1) {
        const dk = i % 2 === 0;
        if(dk) console.log(i);
    }
}

function inSoLe() {
    for(let i = 0; i <= 100; i += 1) {
        const dk = i % 2 === 1;
        if(dk) console.log(i);
    }
}

function inSoChia3Du1() {
    for(let i = 0; i <= 100; i += 1) {
        const dk = i % 3 === 1;
        if(dk) console.log(i);
    }
}

function inSoChinhPhuong() {
    for(let i = 0; i <= 100; i += 1) {
        const dk = Math.sqrt(i) % 1 === 0;
        if(dk) console.log(i);
    }
}

function inSo(checkNumber) {
    for(let i = 0; i <= 100; i += 1) {
        const dk = checkNumber(i); // kiemTraSoChinhPhuong(i);
        if(dk) console.log(i);
    }
}

// function kiemTraSoChan(n) {
    //     return n % 2 === 0;
    // }

    // function kiemTraSoChinhPhuong(n) {
    //     return Math.sqrt(n) % 1 === 0;
// }

inSo(n => n % 2 === 0);
inSo(x => x % 2 === 1);
inSo(x => x % 3 === 1);
inSo(x => Math.sqrt(x) % 1 === 0);

// function inSo(soChia, soDu) {
//     for(let i = 0; i <= 100; i += 1) {
//         const dk = i % soChia === soDu;
//         if(dk) console.log(i);
//     }
// }

// inSo(2, 1);
