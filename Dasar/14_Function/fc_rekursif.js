// Rekursif - Fungsi memanggil dirinya sendiri
// Base case - kondisi akhir dari rekursif yang menghasilkan nilai

// contoh looping ke rekursif
function tampilAngka(n) {
    if (n === 0) return; // Base case
    console.log(n);
    tampilAngka(n-1);
}
tampilAngka(1);

// Rekursif untuk faktorial - looping ke rekursif
function faktorial(a) {
    if (a === 0) return 1;
    return a * faktorial(a - 1);
}

console.log(faktorial(5));

// Semua looping bisa dibuat rekursif, tapi tidak sebaliknya

/* Implementasi Rekursif
-Menggantikan looping
-Fibonacci
- Pencarian dan penelusuran pada struktur data list dan tree
- Bahasa pemrograman yang tidak memiliku pengulangan */