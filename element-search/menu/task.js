const menuLink = document.querySelectorAll('.menu__link');

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function() {
        let subMenu = menuLink[i].closest("li").querySelector("ul");
        console.log(subMenu);
        if (subMenu != null) {
            subMenu.classList.toggle('menu_active')
        }
        return false;
    }
}
