// 02 Mengunakan Fetch
// fetch(resource, init|optional|);
// resource -> URL, Request Object
// init -> Konfigurasi tambahan pada sebuah request berbentuk object

// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function () {

//     const inputKeyword = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=dd9cfc9e&s=' + inputKeyword.value)
//         .then(response => response.json())
//         .then(response => {
//             const movies = response.Search;
//             let cards = '';
//             movies.forEach(m => cards += showCards(m));
//             const movieContainer = document.querySelector('.movie-container');
//             movieContainer.innerHTML = cards;

//             // Ketika tombol detail di-klik
//             const modalDetailButton = document.querySelectorAll('.modal-detail-button');
//             modalDetailButton.forEach(btn => {
//                 btn.addEventListener('click', function () {
//                     const imdbid = this.dataset.imdbid;
//                     fetch('http://www.omdbapi.com/?apikey=dd9cfc9e&i=' + imdbid)
//                         .then(response => response.json())
//                         .then(m => {
//                             const movieDetail = showMovieDetail(m);
//                             const modalBody = document.querySelector('.modal-body');
//                             modalBody.innerHTML = movieDetail;
//                         });
//                 });
//             });
//         })

// });


/* async digunakan untuk memberitahu jika akan ada sesuatu yang 
asinkronus sehingga variabel movies akan diisi oleh data berupa objek
bukan dalam promise(status pending)
await digunakan untuk memberitahu mana yang asinkronus */

// Ketika tombol search ditekan
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    // console.log(movies);
    updateUI(movies);
});

// Ketika tombol detail ditekan
/* event binding:
Memberikan event ke elemen yang awalnya belum ada saat web diload.
Tetapi ketika elemen itu ada, eventnya tetap bisa berjalan */
document.addEventListener('click', async function (e) {
    // e adalah elemen yang di klik
    if (e.target.classList.contains('modal-detail-button')) {
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail);
    }
});


// Function-function
function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=dd9cfc9e&s=' + keyword)
        .then(response => response.json())
        .then(response => response.Search);
}

function updateUI(movies) {
    let cards = '';
    movies.forEach(m => cards += showCards(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=dd9cfc9e&i=' + imdbid)
        .then(response => response.json())
        .then(response => showMovieDetail(response));
}

function updateUIDetail(movieDetail) {
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}


// Funtion untuk elemen html yang akan dimasukkan
function showCards(m) {
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`;
}

function showMovieDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <h4>${m.Title} (${m.Year})</h4>
                            </li>
                            <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                            <li class="list-group-item"><strong>Aactors : </strong> ${m.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong> <br> ${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}