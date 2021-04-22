window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Модальное окно
    const togglePopUp = () => {

        const popUp = document.querySelector('.modal-callback'),
            popUpBackground = document.querySelector('.modal-overlay');
    
        document.body.addEventListener('click', event => {
            let target = event.target;
            if (target.closest('.callback-btn')) {
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

        function ScrollUp(){
            let timeOut;

            if (window.pageYOffset > 0) {
                window.scrollBy(0, -100);
                timeOut = setTimeout(ScrollUp, 20);
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
            ScrollUp();
        });

    };

    arrowUp();
});