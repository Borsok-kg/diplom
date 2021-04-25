const correctnessOfInput = () => {

    const popUp = document.querySelector('.modal-callback');

    popUp.addEventListener('input', event => {
        const target = event.target;
        if (target.closest('.form_name')) {
            target.value = target.value.replace(/[^а-яА-Я1-9\,\.\?\! ]/, '');
        } else if (target.closest('.form_phone')) {
            target.value = target.value.replace(/[^1-9\+{1}]/, '');
        }
    });
};

export default correctnessOfInput;