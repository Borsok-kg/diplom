const tabs = () => {
    const titleTabs = document.querySelectorAll('.accordeon .element .title'),
        elementTabs = document.querySelectorAll('.accordeon .element');

    titleTabs.forEach(blockTitle => {
        blockTitle.addEventListener('click', ({ target }) => {

            const parent = target.parentNode;

            blockTitle.nextElementSibling.style.display = 'block';

            if (parent.classList.contains('active')) {
                parent.classList.remove('active');
                blockTitle.nextElementSibling.style.display = 'none';
            } else {            
                elementTabs.forEach(item => {
                    item.classList.remove('active');
                    blockTitle.nextElementSibling.style.display = 'none';
                    item.children[1].style.display = 'none';
                });
                parent.classList.add('active');
                blockTitle.nextElementSibling.style.display = 'block';
            }
            

        });
    });
};

export default tabs;