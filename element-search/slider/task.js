let sliderItem = Array.from(document.getElementsByClassName('slider__item'));
let sliderPrev = document.querySelector('.slider__arrow_prev');
let sliderNext = document.querySelector('.slider__arrow_next');

let itemActive = 0;

sliderNext.onclick = function() {
    sliderItem[itemActive].classList.remove('slider__item_active');
    itemActive++;
    if (itemActive >= sliderItem.length) {
        itemActive = 0;
    }
    sliderItem[itemActive].classList.add('slider__item_active');
}

sliderPrev.onclick = function() {
    sliderItem[itemActive].classList.remove('slider__item_active');
    itemActive--;
    if (itemActive < 0) {
        itemActive = sliderItem.length - 1; 
    }
    sliderItem[itemActive].classList.add('slider__item_active');
}









