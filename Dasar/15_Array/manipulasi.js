// Manipulasi Array

// 1. Menambah isi array
// var arr = [];
// arr[0] = 'Tariq';
// arr[1] = 'Riza';
// console.log(arr[1]);

// 2. Menghapus isi array
//  var arr = ['Tariq', 'Riza', 'Era'];
//  arr[1] = undefined;
//  console.log(arr);

// 3. Menampilkan isi array
// var arr = ['Tariq', 'Riza', 'Era', 'Thy'];

// for (var i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke-' + (i + 1) + ': ' + arr[i]);
// }

/* array method
length : jumlah elemen array
-join : menggabungkan seluruh isi array dan menjadikannya string
 */

// Method
// var arr = ['Tariq', 'Riza', 'Era'];
// 1. Join(separator)
// console.log(arr.join(' - '));

// 2. push & pop
// arr.push('Thy', 'Mimaw'); // Push memasukin di akhir array
// arr.pop(); // Menghapus yang di akhir
// console.log(arr.join(' - '));

// 3. unshift & shift
// arr.unshift('Thy', 'Mimaw'); // Menambah elemen pertama
// arr.shift(); // Menghapus elemen pertama
// console.log(arr.join(' - '));

// 4. splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2,...);
// arr.splice(1, 2, 'Tyr', 'Odin');
// console.log(arr.join(' - '));

// 5. Slice
// slice(awal,akhir);
// var arr2 = ['Tariq', 'Riza', 'Thor', 'Odin', 'Tyr'];
// var arr3 = arr2.slice(1,3);
// console.log(arr3.join(' - '));

// 6. foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ['Tariq', 'Riza', 'Fajar', 'Budi']

// angka.forEach(function(e) {
//     console.log(e);
// });

// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke ' + (i+1)+ ': ', e);
// })

// 7. map
// var angka = [1, 2, 5, 3, 6, 8, 4, 9];
// var angka2 = angka.map(function (e) {
//     return e * 2;
// });
// console.log(angka.join());
// console.log(angka2.join());

// 8. sort
// var angka = [1, 2, 20, 5, 3, 10, 6, 8, 4, 9];
// console.log(angka.join());
// angka.sort(function (a,b) {
//     return a-b;
// });
// console.log(angka.join());

// 9. filter & find
//mencari nilai dalam array dan mengembalikan dalam bentuk array
var angka = [1, 2, 20, 5, 3, 10, 6, 8, 4, 9];
var angka2 = angka.filter(function(x) {
    return x > 5;
});
console.log(angka2.join());

// mencari 1 nilai saja;
var angka3 = angka.find(function (y) {
    return y > 5;
})
console.log(angka3);