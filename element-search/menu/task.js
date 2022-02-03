let menuLink = document.querySelectorAll('.menu__link');

let check = 0;

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function() {
        let subMenu = menuLink[i].closest("li").querySelector("ul");
        if (subMenu != null) {
            subMenu.classList.toggle('menu_active')
        }

        return false;
    }
}
