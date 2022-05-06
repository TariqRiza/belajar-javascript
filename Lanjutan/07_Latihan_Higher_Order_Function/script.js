// // Ambil semua elemen video
// const videos = document.querySelectorAll('ul li');
// console.log(videos);

// // Pilih hanya yang 'JAVASCRIPT LANJUTAN'
// console.log(videos[0].textContent.includes('JAVASCRIPT LANJUTAN'));
// const videoJs = Array.from(videos).filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'));
// console.log('Elemen Javascript Lanjutan');
// console.log(videoJs);

// // Ambil durasi masing-masing video
// // console.log(videoJs[0].getAttribute('data-duration'));
// const durasiVideo = videoJs.map(video => video.getAttribute('data-duration'));
// console.log('Durasi video');
// console.log(durasiVideo);

// // Ubah durasi menjadi int, ubah menit menjadi detik
// const detikVideo = durasiVideo.map(video => {
//     let menit = Number(video.substring(0, 2));
//     let detik = Number(video.substring(3));
//     return (menit * 60) + detik;
// });
// console.log('Jumlah detik setiap video');
// console.log(detikVideo);

// // Jumlahkan semua detiknya
// const jumlahDetik = detikVideo.reduce((acc, curr) => acc + curr);
// console.log(`Jumlah detik: ${jumlahDetik}`);

// // Ubah formatnya jadi jam menit detik
// const ubahWaktu = waktu => {
//     let jam = Math.floor(waktu / 3600);
//     let menit = Math.floor((waktu - (jam * 3600)) / 60);
//     let detik = waktu - ((jam * 3600) + (menit * 60));

//     return `${jam}:${menit}:${detik}`;
// }
// const jumlahDurasi = ubahWaktu(jumlahDetik)
// console.log(jumlahDurasi);

// // Simpan di DOM
// const jumlahVideo = document.querySelector('.jumlah-video');
// const totalDurasi = document.querySelector('.total-durasi');

// console.log(jumlahVideo);
// console.log(totalDurasi);

// jumlahVideo.innerHTML = videoJs.length;
// totalDurasi.innerHTML = jumlahDurasi;


// Versi 2
// Ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// Pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

    // Ambil durasi masing-masing video
    .map(item => item.dataset.duration)

    // Ubah durasi menjadi float, ubah menit menjadi detik
    .map(waktu => {
        // 10:30 -> [10, 30] split
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })

    // Jumlahkan semua detiknya
    .reduce((total, detik) => total + detik);

// Ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - (menit * 60);


// Simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video.`


console.log(jmlVideo);