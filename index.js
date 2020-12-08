const linePosition = () => {
    const line = document.querySelector('.wrapper__line');
    const items = document.querySelectorAll('.wrapper__list-item');

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const left = `${item.offsetLeft}px`
            const width = `${item.offsetWidth}px`;

            line.style.left = left;
            line.style.width = width;
        });

        item.addEventListener('mouseleave', () => {
            line.style.left = '0';
            line.style.width = '0';
        });
    });
}

linePosition();