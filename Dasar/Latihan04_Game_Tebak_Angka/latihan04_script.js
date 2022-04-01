var tanya = true;
while (tanya) {
    // Penyambutan
    alert('Tebak angka dari : 1 - 10 \nKamu punya 3 kesempatan');

    // Pemain
    var nyawa = 3;

    // Generate angka 1-10
    var jawaban = Math.floor(Math.random() * 10) + 1;

    // Hasil Jawaban
    var hasil = '';
    
    while (nyawa > 0) {
        var p = parseInt(prompt('Masukan angka tebakan'));
        if (p == jawaban) {
            alert('Anda benar! \nAngka yang dicari adalah ' + jawaban);
            break;
        } else if (p < jawaban) {
            hasil = 'Terlalu RENDAH!';
            nyawa--;
        } else if (p > jawaban) {
            hasil = 'Terlalu TINGGI!';
            nyawa--;
        } else {
            hasil = 'Ini bukan angka -_-';
            nyawa--;
        }

        if (nyawa == 0){
            alert('Anda kalah :(\nAngka yang dicari adalah ' + jawaban);
        } else {
            alert(hasil + '\nAyo masih ada ' + nyawa + ' kesempatan lagi');
        }
    }

    tanya = confirm('Lagi?');
}

alert('terimakasih sudah bermain :^)');