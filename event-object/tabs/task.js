const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContents = document.querySelectorAll('.tab__content');

tabs.forEach(onClickTabs);

function onClickTabs(item) {
    item.addEventListener('click', () => {
        if (!item.classList.contains('tab_active')) {
            tabs.forEach((item) => {item.classList.remove('tab_active')});
            item.classList.add('tab_active');
    
            let index = tabs.indexOf(item);
            
            tabContents.forEach((item) => {item.classList.remove('tab__content_active')});
            tabContents[index].classList.add('tab__content_active');
        }
    })
}





