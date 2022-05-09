// A for..of => looping pada iterables
// 01 array
// const mhs = ['Riza', 'Fajar', 'Andien'];

// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// mhs.forEach(m => console.log(m));

// tiap elemen direpresentasikan sebagai 'm' dari array 'mhs'
// for (const m of mhs) {
//     console.log(m);
// }


// 02 String
// const nama = 'Riza';
// for (const n of nama) {
//     console.log(n);
// }

// const mhs = ['Riza', 'Fajar', 'Andien'];
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// mengambil index pada for..of
// for (const [i, m] of mhs.entries()) {
//     console.log(m);
// }


// 03 Nodelist
// const liNama = document.querySelectorAll('.nama');
// console.log(liNama);

// liNama.forEach(n => console.log(n.textContent));
// for (n of liNama) {
//     console.log(n.innerHTML);
// }


// 04 Arguments
// function jumlahkanAngka() {
//     console.log(arguments);
//     // untuk menjumlahkan nilai dalam arguments
//     let jumlah = 0;
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));



// B for..in => looping pada enumerable
const mhs = {
    nama: 'Riza',
    umur: 21,
    email: 'trqriza@gmail.com'
}

for (m in mhs) {
    // menampilkan enumerablenya
    console.log(m);
    // menampilkan valueanya
    console.log(mhs[m]);
}