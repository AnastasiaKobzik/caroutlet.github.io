$('.buttons .but').on('click', function () {
        let id = $(this).attr('data-bs-target');
        let collapse = $('.collapse');
        let buts = $('.but');
        for (let i = 0; i < collapse.length; i++) {
            $(collapse[i]).removeClass('show');
        }
        for (let i = 0; i < buts.length; i++) {
            $(buts[i]).addClass('collapsed');
        }

        $(this).removeClass('collapsed')
        $(id).addClass('show');

    })


//При наведении в меню открывается список телефонов
    const telMenu = document.querySelector('.nav-item.dropdown.in-mobile')
    if (telMenu) {
        telMenu.addEventListener('mouseover', (e) => {
            const navLink = telMenu.querySelector('.nav-link.dropdown-toggle')
            navLink.classList.add('show');
            navLink.setAttribute('aria-expanded', 'true')

            const dropdownMenu = telMenu.querySelector('.dropdown-menu')
            dropdownMenu.classList.add('show');
            dropdownMenu.setAttribute('data-bs-popper', 'none')
        })
        telMenu.addEventListener('mouseout', (e) => {
            const navLink = telMenu.querySelector('.nav-link.dropdown-toggle')
            navLink.classList.remove('show');
            navLink.setAttribute('aria-expanded', 'false')

            const dropdownMenu = telMenu.querySelector('.dropdown-menu')
            dropdownMenu.classList.remove('show');
            dropdownMenu.removeAttribute('data-bs-popper')
        })
        telMenu.addEventListener('click', (e) => {
            const navLink = telMenu.querySelector('.nav-link.dropdown-toggle')
            navLink.classList.add('show');
            navLink.setAttribute('aria-expanded', 'true')

            const dropdownMenu = telMenu.querySelector('.dropdown-menu')
            dropdownMenu.classList.add('show');
            dropdownMenu.setAttribute('data-bs-popper', 'none')
        })
    }  