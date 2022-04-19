// A. MEMANIPULASI ELEMEN
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

// const p2 = document.querySelector('.p2');
// p2.classList.add('label');

// p2.classList.remove('label');

// p2.classList.toggle('label');
// p2.classList.toggle('biru-muda');

// p2.classList.add('satu');
// p2.classList.add('dua');
// p2.classList.add('tiga');

// console.log(p2.classList.item(2));
// console.log(p2.classList.contains('dua'));

// p2.classList.replace('tiga', 'empat');



// B. MEMANIPULASI NODE
// 01 buat elemen baru
const pBaru = document.createElement('p');
// 02 buat teks untuk elemen
const teksPBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// 03 simpan pBaru di akhir Section A (Element Parent)
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


// 04 Membuat elemen baru di antara elemen-elemen lain
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

// 05 remove Node (diperlukan element parent dan element yang ingin dihapus)
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// 06 Replace Node
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';