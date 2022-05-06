// Template Literals

// 01 Multi-line String
console.log(`string 1
string 2`);

// 02 Multi-line String (HTML Fragments)
const mhs = {
    nama: 'Tariq Riza',
    umur: 21,
    nrp: '18032819',
    email: 'trqriza@gmail.com'
};

let el = `<div class= "mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);

const body = document.getElementsByTagName('body')[0];
body.innerHTML = el;


// 03 Embeded Expression
const nama = 'Tariq Riza';
let umur = 21;
console.log(`Halo, perkenalkan nama saya ${nama}, saya ${umur} tahun.`);
// Bisa juga memanggil function
const x = 10;
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);


// 04 Expression Interpolation
let a = 10;
let b = 15;
console.log(`Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah : ${a+b}, bukan ${2 * a + b}`);