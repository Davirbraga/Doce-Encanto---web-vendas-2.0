function menushow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "Ativo/imagem/menu-icon.png";
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "Ativo/imagem/close-white_36dp.png";
    }
}
