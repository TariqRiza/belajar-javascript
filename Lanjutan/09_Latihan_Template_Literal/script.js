// 1. HTML Fragments
// const mhs = {
//     nama: 'Tariq Riza',
//     umur: 21,
//     nrp: '287461097',
//     email: 'trqriza@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;


// 2. Looping
// const mhs = [{
//         nama: 'Tariq Riza',
//         email: 'trqriza@gmail.com'
//     },
//     {
//         nama: 'Erathy',
//         email: 'erathyart@gmail.com'
//     },
//     {
//         nama: 'Faja Budi',
//         email: 'mfbdfajar@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`;
// Join digunakan untuk method chaining agar tidak ada koma di list


// 3. Conditionals
// ternary
// const lagu = {
//     judul: 'Lagu 1',
//     penyanyi: 'Penyanyi 1',
//     feat: 'Penyanyi 2'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`


// 4. Nested
// HTML Fragments bersarang

const mhs = {
    nama: 'Tariq Riza',
    semester: 5,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemrograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Object'
    ]
}

function cetakMataKuliah(mataKuliah) {
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`

document.body.innerHTML = el;