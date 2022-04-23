// DOM Traversal
const close = document.querySelectorAll('.close');

close.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none';
        // Menghindari aksi default (link tidak akan refresh saat link ditekan)
        e.preventDefault();
    });
});