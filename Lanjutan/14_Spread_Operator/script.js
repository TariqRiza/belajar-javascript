// Spread Operator
// memecah iterables menjadi single element

// const mhs = ['Riza', 'Fajar', 'Andien'];
// console.log(...mhs[0]);

// 01 Menggabungkan 2 atau lebih array
// const mhs = ['Riza', 'Fajar', 'Andien'];
// const dosen = ['Tariq', 'Budi', 'Rahma'];
// const orang = [...mhs, 'Era', ...dosen];

// // const orang = mhs.concat(dosen);
// // jika mengunakan concat tidak bisa memasukan nilai di tengah
// console.log(orang);


// 02 Meng-copy array
// const mhs = ['Riza', 'Fajar', 'Andien'];
// // sama saja dengan menggunakan referensi -> tidak benar" mengcopy nilai
// // const mhs1 = mhs;
// // mhs1[0] = 'Era';

// const mhs1 = [...mhs];
// mhs1[0] = 'Era';
// console.log(mhs1);
// console.log(mhs);


// 03 Mengambil nama pada html dan memasukannya ke array
// const liMhs = document.querySelectorAll('li');

// dengan looping
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }

// dengan higher order function map dan spread
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);


// 04 Membuat respon per-huruf saat elemen H1 di Hover
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
console.log(huruf);
nama.innerHTML = huruf;