// 01 Destructuring function return value

// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2, 3);
// console.log(bagi);


// Jika nama variabel ingin acak maka gunakan return object
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const {
//     bagi,
//     tambah,
//     kali,
//     kurang
// } = kalkulasi(2, 3);
// console.log(kurang);



// 02 Destructure function arguments
const mhs1 = {
    nama: 'Tariq Riza',
    umur: 21,
    email: 'trqriza@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75
    }
}

// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
// }

// console.log(cetakMhs(mhs1));


function cetakMhs({
    nama,
    umur,
    nilai: {
        tugas,
        uts,
        uas
    }
}) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}.`;
}

console.log(cetakMhs(mhs1));