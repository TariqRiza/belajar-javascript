// global scope / window scope
var a = 1;

function tes(b) {
    // argumen masuk ke var lokal

    // function scope
    // var a = 2;

    a = 3;
    // dalam funtion dapat memakai global
    console.log(a);
    // mengeluarkan var global
    console.log(window.a);
}

tes(2);