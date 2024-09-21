document.getElementById('menu-toggle').addEventListener('click', function() {
    const sideMenu = document.getElementById('side-menu');
    if (sideMenu.style.transform === 'translateX(0px)') {
        sideMenu.style.transform = 'translateX(-200px)';
    } else {
        sideMenu.style.transform = 'translateX(0px)';
    }
});

