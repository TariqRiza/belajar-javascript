const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Mencari angka >= 3
// for
// const angkaBaru = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         angkaBaru.push(angka[i]);
//     }
// }
// console.log(angkaBaru);

// filter
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);


// map
// kalikan semua angka dengan 2
// const newAngka = angka.map(a => a * 2);
// console.log(angka);
// console.log(newAngka);


// reduce
// jumlahkan seluruh elemen pada array
// 5 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9 => 5 adalah nilai awal
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
// console.log(newAngka);


// Method Chaining
// Cari angka > 5
// Kalikan 3
// Jumlahkan
const hasil = angka.filter(a => a > 5) // 8, 9, 9
    .map(a => a * 3) // 24, 27, 27
    .reduce((acc, curr) => acc + curr); // 78
console.log(hasil);