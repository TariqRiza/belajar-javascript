// // Event Handler
// const p3 = document.querySelector('.p3');

// function ubahWarna() {
//     // p3.style.backgroundColor = 'lightblue';
//     p2.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarna;


// // addEventListener()
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function () {
//     // alert('ok');
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('item baru');
//     liBaru.appendChild(teksLiBaru);
//     ul.appendChild(liBaru);
// });

// Perbedaan Event Handler dan addEventListener()
// Event handler akan menimpa event sebelumnya setelah event baru
const p3 = document.querySelector('.p3');
// p3.onclick = function () {
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function () {
//     p3.style.color = 'red';
// }

// Event listener akan tidak akan menimpa event lain
// p3.addEventListener('click', function () {
//     p3.style.backgroundColor = 'lightblue';
// });
// p3.addEventListener('click', function () {
//     p3.style.color = 'red';
// });

p3.addEventListener('mouseenter', function () {
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('mouseleave', function () {
    p3.style.backgroundColor = 'white';
});