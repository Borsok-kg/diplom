window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Модальное окно
    const togglePopUp = () => {

        const popUp = document.querySelector('.modal-callback'),
            popUpBackground = document.querySelector('.modal-overlay'),
            popUpBtn = document.querySelector('.callback-btn');
    
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
});