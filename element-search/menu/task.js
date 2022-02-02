let menuLink = document.querySelectorAll('.menu__link');

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function() {
        let subMenu = menuLink[i].closest("li").querySelector("ul");

        let menuActiv = document.querySelectorAll(".menu_active");
        if (menuActiv.length) {
            menuActiv.forEach((element) => {
                element.classList.remove('menu_active');
            })
        }

        subMenu.classList.add('menu_active')
        return false;
    }
}