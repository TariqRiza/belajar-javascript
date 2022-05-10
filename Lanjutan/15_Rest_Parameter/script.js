// Rest Parameter
// Merepresentasikan argument pada function dengan
// jumlah yang tidak terbatas menjadi sebuah array
// -> rest parameter hanya bisa digunakan di akhir array


// 01 Mengembalikan nilai array
// function myFunct(...myArgs) {
//     // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//     return myArgs;
//     // return Array.from(arguments);
//     // return [...arguments];
// }
// console.log(myFunct(1, 2, 3, 4, 5));


// 02 Melakukan operasi pada nilai yang dimasukan pada function
// function jumlahkan(...angka) {
//     // let total = 0;
//     // for (const a of angka) {
//     //     total += a;
//     // }
//     // return total;

//     return angka.reduce((a, b) => a + b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));


// 03 array destructuring
// const kelompok1 = ['Tariq', 'Riza', 'Fajar', 'Budi'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);
// console.log(wakil);
// console.log(anggota);


// 04 Object destructuring
// const team = {
//     pm: 'Riza',
//     forntEnd1: 'Tariq',
//     frontEnd2: 'Fajar',
//     backEnd: 'Budi',
//     ux: 'Era',
//     devOps: 'Andien'
// }

// const {
//     pm,
//     ...myTeam
// } = team;
// console.log(pm);
// console.log(myTeam);


// 05 filter
function filterBy(type, ...values) {
    // if (type == 'number') {
    //     return values.filter(v => typeof v === 'number');
    // }
    return values.filter(v => typeof v === type);
}
console.log(filterBy('boolean', 1, 2, 3, 'Riza', false, 10, true, 'Tariq'));