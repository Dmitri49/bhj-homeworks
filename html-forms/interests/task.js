const innerList = document.querySelectorAll('.interest > ul');

innerList.forEach((item) => {
    const mainInterest = item.closest('li');
    const mainCheck = mainInterest.querySelector('.interest__check');
    const list = item.querySelectorAll('.interest')

    mainCheck.addEventListener('change', (event) => {
        if(event.target.checked) {
            list.forEach((elem) => {
                elem.querySelector('input').checked = true;
            })
        } else {
            list.forEach((elem) => {
                elem.querySelector('input').checked = false;
            })
        }
    })
})