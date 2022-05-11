// Callback
// 01 Synchronous Callback
// function halo(nama) {
//     alert(`Halo ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama: ');
//     callback(nama);
// }

// tampilkanPesan(nama => {
//     alert(`Halo, ${nama}`);
// });


// const mhs = [{
//         "nama": "Tariq Riza",
//         "nrp": "4893021",
//         "email": "trqriza@gmail.com",
//         "jurusan": "Teknik Elektro",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Fajar Budi",
//         "nrp": "4728056",
//         "email": "mfbd@gmail.com",
//         "jurusan": "Teknik Elektro",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Andien Putri",
//         "nrp": "6784106",
//         "email": "andienrpr@gmail.com",
//         "jurusan": "Desain Komunikasi Visual",
//         "idDosenWali": 2
//     },
// ];
// console.log('Mulai');
// mhs.forEach(m => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('Selesai');



// 02 Asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', results => {
//     console.log(JSON.parse(results));
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {

// });
// console.log('selesai');

// JQuery
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
        console.log(mhs);
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');