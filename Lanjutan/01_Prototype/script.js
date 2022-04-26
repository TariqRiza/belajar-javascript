// Cara untuk membuat Object pada Javascript
// 1. Object Literal
// PROBLEM : tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//     nama: 'Riza',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Tariq',
//     energi: 20,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// 2. Function Declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }

//     return mahasiswa;
// }

// Salah satu cara agar method tidak disimpan ulang oleh program

// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },

//     tidur: function (jam) {
//         this.energi += jam * 2;
//         cosolee.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// };

// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;
//     mahasiswa.tidur = methodMahasiswa.tidur;

//     return mahasiswa;
// }

// let riza = Mahasiswa('Riza', 17);
// let tariq = Mahasiswa('Tariq', 20);

// 3. Constructor Function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }
// }

// let riza = new Mahasiswa('Riza', 17);

// 4. Object.create()

const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    },
    main: function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    },

    tidur: function (jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur!`);
    }
};

function Mahasiswa(nama, energi) {
    // let mahasiswa = {};
    let mahasiswa = Object.create(methodMahasiswa);

    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}

let riza = Mahasiswa('Riza', 17);
let tariq = Mahasiswa('Tariq', 20);