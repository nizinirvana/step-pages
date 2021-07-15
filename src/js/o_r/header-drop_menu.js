const btnDropMenuOpen = document.querySelector(".menu-drop");
const btnDropMenuClose = document.querySelector(".closed-menu");
const topMenu = document.querySelector(".header-top-menu-drop");

let windowSize = window.matchMedia("(min-width:0px) and (max-width:480px)");
let toShow = false;

btnDropMenuOpen.addEventListener('click', () => {
    event.currentTarget.classList.add('hidden');
    btnDropMenuClose.classList.remove('hidden');

    topMenu.classList.remove('hidden');

    toShow = true;
    console.log("click!");
});

btnDropMenuClose.addEventListener('click', () => {
    event.currentTarget.classList.add('hidden');
    btnDropMenuOpen.classList.remove('hidden');

    topMenu.classList.add('hidden');

    toShow = false;
    console.log("click!");
});

window.addEventListener('resize', function(event) {
    if (!windowSize.matches) {
        topMenu.classList.add('hidden');
    } else {
        if (toShow) {
            topMenu.classList.remove('hidden');
        }
    }
}, true);

