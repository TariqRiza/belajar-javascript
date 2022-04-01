/* Refactoring
Mengubah kode agar jadi lebih 'baik' tanpa mengubah fungsinya

Alasannya
-Readability
-DRY (Don't Repeat Yourself)
-Testability
-Performance
-Maintainability */

function jumlahVolumeDuaKubus(a, b) {
    return a * a * a + b * b * b;
}

console.log(jumlahVolumeDuaKubus(4, 3));