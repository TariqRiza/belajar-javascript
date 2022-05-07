// Destructuring Varaiables / Assigment

// A Destructuring Array
// const perkanalan = ['Halo', 'nama', 'saya', 'Tariq Riza'];

// const [salam, satu, dua, nama] = perkanalan;

// skipping items
// const [salam, , , nama] = perkanalan;
// console.log(salam);


// 01 Swap Items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);


// 02 Return value pada function
// function coba() {
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);


// 03 Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);



// B Destructuring Obbject
// const mhs = {
//     nama: 'Tariq Riza',
//     umur: 21
// }
// // nama variabel harus sesuai nama properti objectnya
// const {
//     nama,
//     umur
// } = mhs;
// console.log(nama);
// console.log(umur);


// 01 Assignment tanpa deklarasi object
// ({
//     nama,
//     umur
// } = {
//     nama: 'Tariq Riza',
//     umur: 21
// });
// console.log(nama);
// console.log(umur);


// 02 Assign ke variabel baru
// const mhs = {
//     nama: 'Tariq Riza',
//     umur: 21
// }

// const {
//     nama: n,
//     umur: u
// } = mhs;
// console.log(n);
// console.log(u);


// 03 Memberikan default value
// const mhs = {
//     nama: 'Tariq Riza',
//     umur: 21
// }

// const {
//     nama,
//     umur,
//     email = 'email@default.com'
// } = mhs;
// console.log(nama);
// console.log(umur);
// console.log(email);


// 04 Memberi nilai default + assign ke variabel baru
// const mhs = {
//     nama: 'Tariq Riza',
//     umur: 21
// }

// const {
//     nama: n,
//     umur: u,
//     email: e = 'email@default.com'
// } = mhs;
// console.log(n);
// console.log(u);
// console.log(e);


// 05 Rest parameter
// const mhs = {
//     nama: 'Tariq Riza',
//     umur: 21,
//     email: 'trqriza@gmail.com'
// }

// const {
//     nama,
//     ...value
// } = mhs;
// console.log(nama);
// console.log(value);


// 06 Mengambil field pada object, setelah dikirim sebagai parameter untul function
const mhs = {
    id: 178,
    nama: 'Tariq Riza',
    umur: 21,
    email: 'trqriza@gmail.com'
}

function getIdMhs({
    id
}) {
    return id;
}

console.log(getIdMhs(mhs));