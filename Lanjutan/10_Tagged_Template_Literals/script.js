// Tagged Templates
// const nama = 'Tariq Riza';
// const umur = 21;

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`
//     // });
//     // // Tanda OR digunakan jika value kosong maka tampilkan string kososng
//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);


// Highlight
const nama = 'Tariq Riza';
const umur = 21;
const email = 'trqriza@gmail.com'

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight `Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email}`;
console.log(str);

document.body.innerHTML = str;