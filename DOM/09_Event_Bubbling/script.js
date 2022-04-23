// DOM Traversal
// const close = document.querySelectorAll('.close');

// close.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none';
//         // Menghindari aksi default (link tidak akan refresh saat link ditekan)
//         e.preventDefault();
//         // Menghentikan event sampai dititik ini saja
//         e.stopPropagation();
//     });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function (card) {
//     card.addEventListener('click', function () {
//         alert('ok');
//     });
// });

// Ketika tombol close ditekan makan event ketika cards ditekan juga berjalan
// Karena event suatu elemen juga berpengaruh dengan elemen parentnya


// Memberikan event di container dan mengetahui elemen apa yang kita klik di container
const container = document.querySelector('.container');
container.addEventListener('click', function (e) {
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});