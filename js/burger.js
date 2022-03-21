window.addEventListener('DOMContentLoaded', function() {
    burger = document.querySelector('.burger')
    burger.addEventListener('click', function(event) {
        burger.classList.toggle('opened');
        burger.toggleAttribute('aria-expanded');
        document.querySelector('.section-header__nav_button').classList.toggle('nav_button-open')
    })
})