// function init() {
//     let nama = 'Riza';
//     // let umur = 21;

//     function tampilNama() {
//         console.log(nama);
//         // console.log(umur);
//     }
//     // tampilNama();
//     // console.dir(tampilNama);
//     return tampilNama;
// }
// let panggilNama = init();
// panggilNama();

// Bentuk lain
// function init() {
//     // let nama = 'Riza';

//     return function (nama) {
//         console.log(nama);
//         // console.log(umur);
//     }
// }
// let panggilNama = init();
// panggilNama('Tariq');
// panggilNama('Riza');


// Mengapa menggunakan Closures?
// 01 Membuat Function Factories
// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Riza');
// selamatMalam('Fajar');
// console.dir(selamatMalam);


// 02 Private Method / Private Variable
let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());