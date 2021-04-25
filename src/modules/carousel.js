const carousel = () => {
    
    const servicesCarousel = document.querySelector('.services-carousel'),
        servicesChildren = [...servicesCarousel.children],
        servicesArrow = document.querySelector('.services-arrow');

    let currentSlide = 0;

    servicesCarousel.style.display = 'flex';

    servicesChildren.forEach((item) => {
        item.style.flex = '0 0 33%';
    });

    servicesArrow.addEventListener('click', (event) => {
        const target = event.target;

        if (target.matches('.arrow-right')) {
            if(currentSlide === -(servicesChildren.length - 3)) return;
            --currentSlide;
            servicesCarousel.style.transform = `translateX(${servicesChildren[0].offsetWidth * currentSlide}px)`;
        } else if(target.matches('.arrow-left')) {
            if(currentSlide === 0) return;
            ++currentSlide;
            servicesCarousel.style.transform = `translateX(${servicesChildren[0].offsetWidth * currentSlide}px)`;
        }
        else {return;}

    });
};


export default carousel;