/* Popup Box / dialog box
Sebuah window kecil dalam browser yang dapat kita munculkan
sebagai alat interaksi agar user dapat berdialog dengan
halaman web
ada 3 jenis: alert, prompt, confirm

-alert box : alert('hello world');
hanya tombol ok*/
// alert(' halo \n riza tamvan :^)');

/* -prompt box :prompt('Masukan nama: ');
-terdapat input textbox
-mengembalikan nilai yang dimasukan ke inputnya */
// var nama = prompt('Masukan nama:');
// alert('Halo ' + nama + ' :^)');

/* -confirm : confirm('Kamu yakin?');
-untuk meminta konfirmasi dari user(true or false) */
// var tes = confirm('Kamu yakin?');
// if(tes === true){
//     alert('user menekan ok')
// } else{
//     alert('user menekan cancel');
// }

alert('selamat datang..');
var lagi = true;

while(lagi) {
    var nama = prompt('masukan nama:');
    alert('halo ' + nama);

    lagi = confirm('coba lagi?');
}

alert('terima kasih');