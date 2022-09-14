const tabElements = Array.from(document.querySelectorAll('.tab'));
const tabConten = Array.from(document.querySelectorAll('.tab__content'));

tabElements.forEach((item) => {
    item.addEventListener('click', () => {
        tabElements.forEach((elem) => {elem.classList.remove('tab_active')});
        item.classList.add('tab_active');

        let index = tabElements.indexOf(item);

        let activeContent = document.querySelector('.tab__content_active');

        activeContent.classList.remove('tab__content_active');
        tabConten[index].classList.add('tab__content_active')
    });
})





