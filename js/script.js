window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Модальное окно
    const togglePopUp = () => {

        const popUp = document.querySelector('.modal-callback'),
            popUpBackground = document.querySelector('.modal-overlay');
    
        document.body.addEventListener('click', event => {
            let target = event.target;
            if (target.closest('.callback-btn, .button-services')) {
                popUp.style.display = 'block';
                popUpBackground.style.display = 'block';
            } else if (target.closest('.modal-close') || target.closest('.modal-overlay')) {
                popUp.style.display = 'none';
                popUpBackground.style.display = 'none';
            }
        });
    };

    togglePopUp();

    // Стрелка вверх
    const arrowUp = () => {
        const up = document.querySelector('.up');

        function scrollUp(){
            let timeOut;

            if (window.pageYOffset > 0) {
                window.scrollBy(0, -100);
                timeOut = setTimeout(scrollUp, 20);
            } else {
                clearTimeout(timeOut);
            }
        }

        window.addEventListener('scroll', () => {
            if (window.pageYOffset >= 666) {
                up.style.display = 'block';
            } else {
                up.style.display = 'none';
            }
        });

        up.addEventListener('click', () => {
            scrollUp();
        });

    };

    arrowUp();

    // Корректный ввод данных
    const correctnessOfInput = () => {

        const name = document.querySelector('.form_name'),
            phone = document.querySelector('.form_phone'),
            popUp = document.querySelector('.modal-callback');

        popUp.addEventListener('input', event => {
            const target = event.target;
            if (target.closest('.form_name')) {
                target.value = target.value.replace(/[^а-яА-Я1-9\,\.\?\! ]/, '');
            } else if (target.closest('.form_phone')) {
                target.value = target.value.replace(/[^1-9\+{1}]/, '');
            }
        });
    };

    correctnessOfInput();
});