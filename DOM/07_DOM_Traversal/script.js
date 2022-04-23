// Menghapus kartu ketika tombol x ditekan
// Event Hanlder
// const container = document.querySelector('.container');
// const card = document.querySelector('.card');

// const closeCard = document.querySelector('.close');
// closeCard.addEventListener('click', function () {
//     card.style.display = 'none';
//     // console.log('data dihapus');
//     // container.removeChild(card);
// });



// DOM Traversal
const close = document.querySelectorAll('.close');

// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function (e) {
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// }

close.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none';
    });
});

// DOM Traversal Method -> Hasil
// parentNode -> node
// parentElement -> element
// nextSibling -> node
// nextElementSibling -> element
// previousSibling -> node
// previousElementSibling -> element

const nama = document.querySelector('.nama');
// console.log(nama.parentElement.parentElement);
console.log(nama.previousElementSibling);