// 01 element.innerHTML -> Mengbah isi HTML dari elemen 

// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Tariq Riza</em>';
// // const sectionA = document.querySelector('section#a');
// // sectionA.innerHTML = 'Hello World';



// 02 element.style.<properticss> -> Mengubah style dari elemen

// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';



// 03 Memanipulasi Attribute dari elemen
// a. element.getAttribrute() -> Mengambil nilai Attribute elemen
// b. element.setAttribrute() -> Mengubah nilai Attribute elemen
// c. element.removeAttribute() -> Menghapus Attribute elemen

// const judul = document.getElementsByTagName('h1')[0];
// // judul.setAttribute('name', 'tariq');

// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link');

// console.log(a.getAttribute('href'));
// console.log(judul.getAttribute('id'));

// a.removeAttribute('id');

// const p2 = document.querySelector('.p2');
// p2.setAttribute('class', 'label');



// 04 Mengelola class dengan element.classList.(aksi)
// a. .add() -> Menambah class
// b. .remove() -> Menghapus class
// c. .toggle() -> Menambahkan/ \Menghapus class (tergantung punya atau tidak)
// d. .item() -> Mengetahui class tertentu yang ada pada elemen, dengan index class keberapa
// e. .contain() -> Mencari elemen punya class tertentu atau tidak
// f. .replace() -> Mengganti class yang ada dengan class yang baru

const p2 = document.querySelector('.p2');
p2.classList.add('label');

p2.classList.remove('label');

p2.classList.toggle('label');
p2.classList.toggle('biru-muda');

p2.classList.add('satu');
p2.classList.add('dua');
p2.classList.add('tiga');

console.log(p2.classList.item(2));
console.log(p2.classList.contains('dua'));

p2.classList.replace('tiga', 'empat');