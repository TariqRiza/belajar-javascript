// a dan b adalah parameter
function jumlahVolumeDuaKubus(a, b) {
    var total, volumeA, volumeB;

    volumeA = a * a * a; // Math.pow(a, 3);
    volumeB = b * b * b; // Math.pow(b, 3);
    total = volumeA + volumeB;

    return total;
}

console.log(jumlahVolumeDuaKubus(4, 3));
console.log(jumlahVolumeDuaKubus(5, 6));
// (8 dan 3) serta (5 dan 6) adalah argumen

// arguments
function tambah() {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1, 2, 3, 4, 10);
console.log(coba);