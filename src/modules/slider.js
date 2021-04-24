const slider = () => {
    const topSlider = document.querySelector('.top-slider'),
        itemSlides = topSlider.querySelectorAll('.item'),
        table = topSlider.querySelectorAll('.table'),
        dotsWrapper = document.createElement('ul');

    let dot;
    
    // table.forEach(item => {
    //     item.style.opacity = '1';
    //     item.style.visibility = 'visible';
    // });
    
    dotsWrapper.classList.add('dots_wrapper');
    
    topSlider.appendChild(dotsWrapper);
    
    
    let counterSlides = 0;
    
    for (let index = 0; index < itemSlides.length; index++) {
        dot = document.createElement('li');
        dot.classList.add('dot');
        dotsWrapper.appendChild(dot);
    }

    const dots = dotsWrapper.querySelectorAll('.dot');
    
    
    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    nextSlide(dots, counterSlides, 'active');

    const autoPlaySlide = () => {
        
        prevSlide(itemSlides, counterSlides, 'active');
        prevSlide(dots, counterSlides, 'active');
        itemSlides[counterSlides].style.height = '0';
        counterSlides++;

        if (counterSlides >= itemSlides.length) {
            counterSlides = 0;
        }
    
        nextSlide(itemSlides, counterSlides, 'active');
        nextSlide(dots, counterSlides, 'active');
        itemSlides[counterSlides].style.height = '600px';
    };
    
    const startAutoPlaySlider = () => {
        setInterval(autoPlaySlide, 5000);
    
    };

    topSlider.addEventListener('click', ({ target }) => {
    
        prevSlide(itemSlides, counterSlides, 'active');
        prevSlide(dots, counterSlides, 'active');
        itemSlides[counterSlides].style.height = '0';
        if (target.matches('.dot')) {
            dots.forEach((dot, index) => {
                if (dot === target) {
                    counterSlides = index;
                }
            });
        }
        nextSlide(itemSlides, counterSlides, 'active');
        nextSlide(dots, counterSlides, 'active');
        itemSlides[counterSlides].style.height = '600px';
    });
    
    
    
    startAutoPlaySlider();
};


export default slider;