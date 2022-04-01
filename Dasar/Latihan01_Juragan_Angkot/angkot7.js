var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (!penumpang.length) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    // jika angkot tidak kosong
    } else {
        // telusuru seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if (penumpang[i] == undefined) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;
            } else if (penumpang[i] == namaPenumpang) {
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' sudah ada di dalam angkot');
                // kembalikan isi array & keluar dari function
                return penumpang;
            } else if (i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }

        }
    }
}
var hapusPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (!penumpang.length) {
        // pesan angkot kosong
        console.log('Angkot masih kosong!');
        return penumpang;
    // jika angkot tidak kosong
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika nama penumpang sesuai
            if (penumpang[i] == namaPenumpang) {
                // hapus nama penumpang
                penumpang[i] = undefined;
                return penumpang;
            } else if (i == penumpang.length - 1) {
                // tampilkan pesan kesalahan
                console.log(namaPenumpang + ' tidak ada di dalam angkot');
                return penumpang;
            }
        }
    }
}