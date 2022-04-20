// Kasus 1 - Mengubah Warna BG ke Warna Favorite
// const body = document.getElementsByTagName('body')[0];
// untuk body bisa menggunakan (document.body)
const btnUbahWarna = document.getElementById('btnUbahWarna');

btnUbahWarna.addEventListener('click', function () {
    // body.style.backgroundColor = 'lightblue';
    // document.body.style.backgroundColor = 'lightblue';
    document.body.classList.toggle('biru-muda');
});


// Kasus 2 - Mengubah Warna BG ke Warna Random
const btnAcakWarna = document.createElement('button');
const teksBtnAcak = document.createTextNode('Warna Random');
btnAcakWarna.appendChild(teksBtnAcak);
btnAcakWarna.setAttribute('type', 'button');

btnUbahWarna.after(btnAcakWarna);

btnAcakWarna.addEventListener('click', function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // console.log(r + " " + g + " " + b);

    document.body.style.backgroundColor = 'rgb(' + r + ',  ' + g + ' , ' + b + ')';
});


// Kasus 3 - Mengubah Warna BG dengan Slider
// Mengambil elemen slider
const sMerah = document.querySelector('input[name=sMerah');
const sHijau = document.querySelector('input[name=sHijau');
const sBiru = document.querySelector('input[name=sBiru]');

// Mengambil value input dan mengubah warna background
sMerah.addEventListener('input', function () {
    // Mengambil value dari input
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});

sHijau.addEventListener('input', function () {
    // Mengambil value dari input
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});

sBiru.addEventListener('input', function () {
    // Mengambil value dari input
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});


// Kasus 4 - Merubah Warna berdasarkan Posisi Mouse
document.body.addEventListener('mousemove', function (event) {
    // posisi mouse
    // console.log(event.clientX);
    // ukuran browser
    // console.log(window.innerWidth);
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerWidth) * 255);
    document.body.style.backgroundColor = 'rgb(' + xPos + ', ' + yPos + ', 100)';
});