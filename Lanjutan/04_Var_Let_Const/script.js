// function tes() {
//     for (var i = 0; i < 10; i++) {
//         console.log(i);
//     }
// }
// tes();
// console.log(i);

// var -> Menggunakan Function Scope
// let dan const -> Menggunakan Block Scope


// Contoh dari IIFE(Immediately Invoked Function Expression),
// dan SIAF(Self Invoking Anonymous Function)
// Bertujuan untuk menjaga agar variabel yang ada di dalam function
// tidak bisa diakses dari luar

// (function () {
//     for (var i = 0; i < 10; i++) {
//         console.log(i);
//     }
// }());
// console.log(i);

// Contoh mengatasi masalah dengan let
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);

// Contoh menggunakan const -> untuk meminimalisir perubahan state
const mhs = {
    nama: 'Riza',
    umur: 21
}
mhs.umur = 22;
console.log(mhs);

const i = [1, 2, 3];
i.push(4);
console.log(i);