/* Function Declaration (opt  -> optional)
function identifier (ParameterList-opt) {FunctionBody}
-Lebih Fleksibel (dapat ditulis dimanapun - hoisting)
-Mudah dipahami pemula */

function tampilPesan(nama) {
    alert('halo ' + nama);
}

/* Function Expression
function identifier-opt (ParameterList-opt) {FunctionBody}
-Harus didefinisikan lebih dahulu sebelum dipanggil
-Lebih powerful
 *Sebagai closure
 *Sebagai argumen untuk function lain
 *IIFE (Immediately Invoked Function Expression)
-Selalu tulis dulu definisinya */

var pesan = function (nama) {
                alert('halo' + nama);
            }