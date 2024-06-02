let menu_door=document.getElementById('menu_door');
menu_door.addEventListener('click', (e) => {
    let side_menu = document.getElementById('side_menu');
    if (side_menu.style.marginLeft == '-400px') {
        side_menu.style.marginLeft =0;
    }
    else {
        side_menu.style.marginLeft ="-400px";
    }
})