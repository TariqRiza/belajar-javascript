// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=dd9cfc9e&s=avengers',
//     success: movies => console.log(movies)
// });


// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// }

// xhr.open('get', 'http://www.omdbapi.com/?apikey=dd9cfc9e&s=avengers');
// xhr.send();


// fetch('http://www.omdbapi.com/?apikey=dd9cfc9e&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));



// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event 
// yang asynchronous di masa yang akan datang
// -> biasanya dipakai ketika mau request ke sebuah api

// Promise bagaikan sebuah janji
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)

// untuk menjalankan keadaan status / janji diperlukan fungsi callback
// callback (resolve / reject / finally)
// a) resolve -> ketika janji terpenuhi (fulfilled)
// b) reject -> ketika janji tidak terpenuhi (rejected)
// c) finally -> ketika waktu tunggunya selesai (baik saat status fulfilled / rejected)

// aksi akan dilakukan ketika janji terpenuhi ataupun tidak terpenuhi
// aksi (then / catch)
// a) then -> menjalankan resolve
// b) catch -> menjalankan reject


// Contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji telah ditepati!');
//     } else {
//         reject('Ingkar janji...');
//     }
// });

// console.log(janji1);
// // Menangkap resolve dan reject
// // a) resolve ditangkap oleh then
// // b) reject ditangkap oleh catch
// janji1
//     .then(response => console.log('OK : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));


// Contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu!');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('Tidak ditepati setelah beberapa waktu!');
//         }, 2000);
//     }
// })

// console.log('mulai');
// // Kita dapat melihat status promise saat pending sebelum selesai
// console.log(janji2.then(() => console.log(janji2)));

// // Salah satu contoh penggunaan finally : animasi loading
// // ketika promise dijalankan -> animasi loading aktif
// // ketika selesai pending -> animasi loading dimatikan
// janji2
//     .finally(() => console.log('Selesai menunggu!'))
//     .then(response => console.log('OK : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));
// console.log('selesai');


// Promise.all()
// untuk menjalankan ketika punya banyak promise mau dijalanin sekaligus

// Contoh ketika mengambil data dari 2 API
// API 1 -> data Film
const film = new Promise(resolve => {
    setTimeout(() => {
        // Ceritanya data yang didapat adalah JSON (Array of Object)
        resolve([{
            judul: 'Avengers',
            sutradara: 'Riza',
            pemeran: 'Fajar, Andien'
        }]);
    }, 1000);
});

// API 2 -> data cuaca
const cuaca = new Promise(resolve => {
    setTimeout(() => {
        // Ceritanya data yang didapat adalah JSON (Array of Object)
        resolve([{
            kota: 'Bekasi',
            temp: 30,
            kondisi: 'Cerah Berawan'
        }]);
    }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
    // .then(response => console.log(response));

    // Jika ingin memisah promisenya
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });