// membuat object Angkot

function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this. trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        if (!this.penumpang.length) {
            this.penumpang.push(namaPenumpang);
            return this.penumpang;
        } else {
            for (var i = 0; i < this.penumpang.length; i++) {
                if (this.penumpang[i] == undefined) {
                    this.penumpang[i] = namaPenumpang;
                    return this.penumpang;
                } else if (this.penumpang[i] == namaPenumpang) {
                    console.log(namaPenumpang + ' sudah ada di dalam angkot.');
                    return this.penumpang;
                } else if (i == this.penumpang.length - 1) {
                    this.penumpang.push(namaPenumpang);
                    return this.penumpang;
                }
            }
        }
    }

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if(!this.penumpang.length) {
            console.log('angkot masih kosong!');
            return false;
        }

        for (var i = 0; i < this.penumpang.length; i++) {
            if(this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            } else if (i == this.penumpang.length - 1) {
                console.log(namaPenumpang + ' tidak ada di dalam angkot');
            }
        }
    }
}

var angkot1 = new Angkot('Sopiru', ['Cicaheum', 'Cibiru'], [], 0);
var angkot2 = new Angkot('Showparu', ['Antapani', 'Ciroyom'], [], 0);
