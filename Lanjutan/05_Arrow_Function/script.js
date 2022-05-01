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


let mahasiswa = ['Tariq Riza', 'Fajar Budi', 'Andien Putri'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// Jika menggunakan Arrow Function -> Hasil akhir array
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// Hasil akhir Object
let jumlahHuruf = mahasiswa.map(nama => ({
    nama: nama,
    jumlahHuruf: nama.length
}));
console.table(jumlahHuruf);