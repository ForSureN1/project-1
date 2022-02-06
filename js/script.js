document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('scroll', addClassHeader)

    let header = document.querySelector('.header')

    function addClassHeader() {
        if (window.pageYOffset > header.offsetHeight / 2) {
            header.classList.add('active')
        } else {
            header.classList.remove('active')
        }
    }

    let headerService = document.querySelector('.header__serv')
    let underMenu = document.querySelector('.header__under')
    if (headerService) {
        headerService.addEventListener('click', (e) => {
            headerService.classList.toggle('active')
            underMenu.classList.toggle('active')
        })
    }

    let hamb = document.querySelector('.hamb')
    if (hamb) {
        hamb.addEventListener('click', () => {
            hamb.querySelector('#nav-icon3').classList.toggle('open')
            underMenu.classList.toggle('active')
        })
    }

})