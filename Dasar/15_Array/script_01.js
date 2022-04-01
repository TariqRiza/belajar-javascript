/* Array
-Mempermudah pengelolaan nilai/value/data
 *Penelusuran dan Pencarian
-Manajemen memori

Karakteristik array
-Variabel jamak, yang mempunyai banyak elemen dan diacu
dengan nilai yang sama
-Kumpulan pasangan key dan nilai / key and value pair
-Key adalah index pada array dengan tipe integer yang dimulai
dari 0
Array pada javascript bertipe Object
Array pada javascript memiliki fungsi/method length untuk
menghitung jumlah elemen di dalamnya
-Elemen pada array boleh memiliki tipe data yang berbeda */

var binatang = ['Kucing', 'Kelinci', 'Monyet', 'Panda', 'Koala', 'Sapi'];

console.log(binatang[4]);
console.log(typeof(binatang));
console.log(binatang.length);

var myFunc = function () {
    alert('Hello World!');
}
var myArr = ['teks', 2, false, myFunc, [4, 5, 6]];

console.log(myArr[4][1]);