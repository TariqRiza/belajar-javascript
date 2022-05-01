// Arrow Function = Cara lain menuliskan Function
// const tampilNama = function (nama) {
//     return `Halo ${nama}`;
// }
// console.log(tampilNama('Riza'));

// Contoh Arrow Function
// const tampilNama = (nama) => {
//     return `Halo ${nama}`;
// }
// console.log(tampilNama('Riza'));


// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Riza', 'Malam'));


// contoh penulisan lebih ringkas jika:
// Hanya satu parameter, dan hanya return saja (implisit return)
// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('Riza'));


// Contoh jika tidak ada parameter
// const haloDunia = () => `Hello World!`;
// console.log(haloDunia());


// let mahasiswa = ['Tariq Riza', 'Fajar Budi', 'Andien Putri'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// Jika menggunakan Arrow Function -> Hasil akhir array
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// Hasil akhir Object
// let jumlahHuruf = mahasiswa.map(nama => ({
//     nama: nama,
//     jumlahHuruf: nama.length
// }));
// console.table(jumlahHuruf);



// KONSEP THIS PADA ARROW FUNCTION
// Constructor Function
// const Mahasiswa = function () {
//     this.nama = 'Riza';
//     this.umur = 21;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const riza = new Mahasiswa();

// Arrow Function
// const Mahasiswa = function () {
//     this.nama = 'Riza';
//     this.umur = 21;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const riza = new Mahasiswa();


// Object Literal
// const mhs1 = {
//     nama: 'Riza',
//     umur: 21,
//     sayHello: () => {
//         // console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//         console.log(this);
//     }
// }


// const Mahasiswa = function () {
//     this.nama = 'Riza';
//     this.umur = 21;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }


//     // Dikarenakan tidak ada konsep this pada arrow function makan this dicari
//     // dari lexical scope (di luar dari function -> function Mahasiswa)
//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
// }

// const riza = new Mahasiswa();



// CONTOH KASUS ARROW FUNCTION
const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        // Menukar isi satu dan dua
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    // Arrow Funct digunakan agar this-nya mengarah ke box bukan window
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});