const arrowUp = () => {
    const up = document.querySelector('.up'),
        anchor = document.querySelector('#services');

    up.addEventListener('click', () => {
        const scrollTarget = document.querySelector('body'),
            position = scrollTarget.getBoundingClientRect().top;

        window.scrollBy({
            top: position,
            behavior: 'smooth'
        });
    });
    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= 666) {
            up.style.display = 'block';
        } else {
            up.style.display = 'none';
        }
    });
};

export default arrowUp;