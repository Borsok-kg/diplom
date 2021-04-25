const togglePopUp = () => {

    const popUp = document.querySelector('.modal-callback'),
        popUpBackground = document.querySelector('.modal-overlay');
        
        document.body.addEventListener('click', event => {
        let target = event.target;
        if (target.closest('.callback-btn, .button-services, [href="#application"]')) {
            popUp.style.display = 'block';
            popUpBackground.style.display = 'block';
        } else if (target.closest('.modal-close') || target.closest('.modal-overlay')) {
            popUp.style.display = 'none';
            popUpBackground.style.display = 'none';
        }
    });
};

export default togglePopUp;