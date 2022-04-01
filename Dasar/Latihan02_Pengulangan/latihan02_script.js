var s = '';
var n = 10;

// segitiga terbalik
// for (var i = n; i > 0; i--) {
//     for (var j = 0; j < i; j++) {
//         s+= ' ';
//     }
//     for (var k = i; k <= n; k++) {
//         s+= '*';
//     }
//     s+= '\n';
// }
// console.log(s);

// berlian
// for (var i = n; i > 0; i--) {
//     for (var j = 1; j < i; j++) {
//         s+= ' ';
//     }
//     for (var k = i; k <= n; k++) {
//         s+= '*';
//     }
//     for (var l = i; l < n; l++) {
//         s+= '*';
//     }
//     s+= '\n';
// }

// for (var a = 0; a < n - 1; a++) {
//     for (var b = 0; b <= a; b++) {
//         s+= ' ';
//     }
//     for (var c = a; c < n - 1; c++) {
//         s+= '*';
//     }
//     for (var d = a; d < n - 2; d++) {
//         s+= '*';
//     }
//     s+= '\n';
// }
// console.log(s);

// papan catur
var hitam = true;
for (var i = 1; i <= n; i++) {
    if (i % 2 == 1) {
        hitam = true;
    } else {hitam = false};

    for (var j = 1; j <= n; j++){
        if (hitam) {
            s+= '#';
            hitam = false;
        } else {
            s+= ' ';
            hitam = true;
        }
    }
    s+= '\n';
}
console.log(s);