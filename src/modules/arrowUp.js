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

export default arrowUp;