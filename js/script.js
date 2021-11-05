window.addEventListener('DOMContentLoaded', () => {
    //menu
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });

    //modal 
    $('.projects__item').each(function(i) {
        $(this).on('click', function(e) {
            $('.overlay').fadeIn();
           $('.modal').eq(i).fadeIn();
        });
    });
    $('.modal__close, .overlay').on('click', function(){
        $('.modal, .overlay').fadeOut();
    });

    //more projects 
    document.querySelector('.btn__more').addEventListener('click', () => {
        document.querySelector('.projects_2').style.display = 'flex';
    });
});