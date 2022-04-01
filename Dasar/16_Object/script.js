// anatomi object
var Orang = {
    // properti, dipisahkan dengan ','
    nama : 'Tariq Riza',
    umur : 21,
    hobi : 'Gambar',

    // method
    sapa : function() {
        return 'Hi, nama saya ' + this.nama + ' usia saya ' + this.umur + ' tahun, dan hobi saya adalah ' + this.hobi;
    }
};
// object literal
var mhs = {
    nama : 'Erathy',
    umur : 999,
    ips : [3.50, 3.60, 4.00],

    //object dalam object
    alamat : {
        jalan : 'Jl. abc No. 17',
        kota : 'Kota A',
        provinsi : 'Provinsi B',
    }
};