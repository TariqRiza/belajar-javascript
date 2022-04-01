/* untuk mengubah flow program digunakan
-Pengulangan : loop/iterasi
for, while, do while
-Pengkondisian : percabangan
if, if.. else, if.. else if.. else, switch */

for (var i = 0; i < 5; i++) {
    console.log('Hello Riza' + i);
}

var angka = prompt('Masukan angka :');
if (angka % 2 === 0) {
    console.log('genap');
} else {
    console.log('ganjil');
}