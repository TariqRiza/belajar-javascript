/* Asyncronous Function
Sebuah function yang bekerj secara asyncronous (melalui event loop), 
yang menghasilkan (implisit) promise sebagai return value-nya,
tapi cara penulisan code-nya menggunakan penulisan yang
syncronous (standard)

Sebuah async function dapat memiliki keyword await di dalamnya untuk
memberhentikan sementara eksekusi fungsinya sambil menunggu promise-nya
selesai / resolve */

// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai');
//     }, 2000);
// });
// console.log(coba);
// coba.then(() => console.log(coba));


// Menggunakan async await
function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 5000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('selesai');
            }, waktu);
        } else {
            reject('kelamaan!')
        }
    });
}

// const coba = cobaPromise();
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba));

/* async digunakan untuk memberitahu Javascript bahwa akan ada
script yang asyncronous, js akan menunggu keyword await */
async function cobaAsync() {
    /* try untuk resolved
    catch untuk reject (dengan pesan masuk ke parameter) */
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch (err) {
        console.error(err);
    }
}

cobaAsync();