/* Membuat object pada Js
-Object literal
-Function Declaration
-Constructor Function (keyword new)
-Object.create() */

// Object Literal
var mhs1 = {
    nama : 'Tariq Riza',
    nrp : '12345689',
    email : 'tariqriza@gmail.com',
    jurusan : 'Teknik Elektro'
}

var mhs2 = {
    nama : 'Erathy',
    nrp : '17171717',
    email : 'erathy@gmail.com',
    jurusan : 'Teknik Industri'
}

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('LivTree', '19947632', 'Liv@gmail.com', 'Teknik Pangan');

// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
    // var this = {};
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}

var mhs4 = new Mahasiswa('Firend', '28910462', 'Fire@gmail.com', 'Teknik Mesin');