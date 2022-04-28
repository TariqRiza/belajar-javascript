// Execution Context, Hoisting & Scope
// Untuk tampilannya bisa dilihat dari Javascript visualize di google

// console.log(nama);
// var nama = 'Riza';

// 01 creation phase pada Global Context
// Mengecek apakah ada nama variabel atau function dengan mengisi:
// nama var = undefined
// nama function = fn()
// disebut dengan hoisting
// window = global object
// this = window

// 02 execution phase

// console.log(sayHello());

// var nama = 'Riza';
// var umur = 21;

// function sayHello() {
//     return `Halo, nama saya ${nama}, saya ${umur} tahun`;
// }

// function membuat Local Execution Context
// yang di dalamnya terdapat reation dan execution phase
// window
// arguments
// hoisting local

// Contoh 1
// var nama = 'Tariq Riza';
// var username = '@trqriza';

// function cetakURL(username) {
//     console.log(arguments);
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL(`@erathy`));


// Contoh 2
// function a() {
//     console.log(`ini a`);

//     function b() {
//         console.log(`ini b`);

//         function c() {
//             console.log(`ini c`);
//         }

//         c();
//     }

//     b();
// }

// a();

// Contoh 3
function satu() {
    var nama = 'Riza';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Fajar';
satu();
dua('Andien');
console.log(nama);