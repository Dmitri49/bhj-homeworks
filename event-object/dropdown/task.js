const dropdown = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));

dropdown.addEventListener('click', openDropdown);

function openDropdown() {
    dropdownList.classList.toggle('dropdown__list_active');
};

dropdownItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();

        let nameItem = item.textContent;

        dropdownValue.textContent = nameItem;
        dropdownList.classList.remove('dropdown__list_active');
    });
});