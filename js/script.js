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

    let projectBox = document.querySelector('.project__container')
    let popupProject = document.querySelector('.popup__project')
    if (projectBox) {
        projectBox.addEventListener('click', setProjectAttributes)
        popupProject.addEventListener('click', (e) => {
            if (!e.target.classList.contains('popup__container')) {
                popupProject.classList.remove('active')
                document.querySelector('body').style.overflow = 'unset';
            }
        })
    }

    function setProjectAttributes(e) {
        const target = e.target;
        if (target.classList.contains('project__item')) {
            popupProject.classList.add('active')
            const project = e.target.closest('.project__item')
            let projectImg = project.querySelector('.project__item-img img').src
            let projectTitle = project.querySelector('.project__item-title').textContent
            let projectText = project.querySelector('.project__item-txt').textContent
            let projectAttrTotalArea = project.getAttribute('data-totalarea')
            let projectAttrSquare = project.getAttribute('data-square')
            let projectAttrHeight = project.getAttribute('data-height')
            let projectAttrType = project.getAttribute('data-type')
            let projectSizes = project.getAttribute('data-sizes')
                // console.log(projectImg)
                // console.log(projectTitle)
                // console.log(projectText)
                // console.log(projectAttrTotalArea)
                // console.log(projectAttrSquare)
                // console.log(projectAttrHeight)
                // console.log(projectAttrType)
                // console.log(projectSizes)
            popupProject.querySelector('.popup__img img').src = projectImg
            popupProject.querySelector('.popup__title').textContent = projectTitle
            popupProject.querySelector('.popup__txt').textContent = projectText
            popupProject.querySelector('.value-1').textContent = projectAttrTotalArea
            popupProject.querySelector('.value-2').textContent = projectAttrSquare
            popupProject.querySelector('.value-3').textContent = projectAttrHeight
            popupProject.querySelector('.value-4').textContent = projectAttrType
            popupProject.querySelector('.value-5').textContent = projectSizes
            document.querySelector('body').style.overflow = 'hidden';
        }
    }


})