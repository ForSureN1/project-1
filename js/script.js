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
                // let projectText = project.querySelector('.project__item-txt').textContent
            let projectAttrTotalArea = project.getAttribute('data-totalarea')
                // let projectAttrSquare = project.getAttribute('data-square')
                // let projectAttrHeight = project.getAttribute('data-height')
            let projectAttrType = project.getAttribute('data-type')
                // let projectSizes = project.getAttribute('data-sizes')
            let projectAttrKarkas = project.getAttribute('data-karkas')
            let projectAttrPlita = project.getAttribute('data-plita')
            let projectAttrNapolnenie = project.getAttribute('data-napolnenie')
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
                // popupProject.querySelector('.popup__txt').textContent = projectText
            popupProject.querySelector('.value-1').textContent = projectAttrTotalArea
                // popupProject.querySelector('.value-2').textContent = projectAttrSquare
                // popupProject.querySelector('.value-3').textContent = projectAttrHeight
            popupProject.querySelector('.value-4').textContent = projectAttrType
                // popupProject.querySelector('.value-5').textContent = projectSizes
            popupProject.querySelector('.value-6').textContent = projectAttrKarkas
            popupProject.querySelector('.value-7').textContent = projectAttrPlita
            popupProject.querySelector('.value-8').textContent = projectAttrNapolnenie
            document.querySelector('body').style.overflow = 'hidden';
        }
    }


    let popup = document.querySelectorAll('.js-popup')

    if (popup) {
        requestPopup();
    }

    function requestPopup() {
        popup.forEach(btn => btn.addEventListener('click', openForm))

        function openForm(e) {
            let popupform = document.querySelector('.popup__form')
                // let popupcontainer = document.querySelector('.popup__container')
            popupform.classList.remove('hidden')
            setTimeout(() => { popupform.classList.add('active') }, 1);
            popupform.addEventListener('click', (e) => {
                if (e.target === document.querySelector('.popup__close-form')) {
                    popupform.classList.remove('active')
                    setTimeout(() => { popupform.classList.add('hidden') }, 700)
                }
            })
        }
    }


    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    $('input[type="tel"]').click(function() {
        $(this).setCursorPosition(3);
    }).mask("+7 (999) 999 99 99");
})