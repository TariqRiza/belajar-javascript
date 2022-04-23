const imgJumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

const thumbnail = document.querySelector('.thumbnail');
thumbnail.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target.className == 'thumb') {
        // const imgSource = e.target.getAttribute('src');
        // imgJumbo.setAttribute('src', imgSource);
        imgJumbo.src = e.target.src;
        imgJumbo.classList.add('fade');
        setTimeout(function () {
            imgJumbo.classList.remove('fade');
        }, 500);

        thumbs.forEach(function (thumb) {
            thumb.className = 'thumb';
        });

        e.target.classList.add('active');
    }
});