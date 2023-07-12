// отправка формы с мод окна
$('#modalDialog .button-send').on('click', function (e) {
    $("#modalDialog .custom-checkbox").removeClass('error');
    sendModalDialogForm('#modalDialog .modalDialogForm', './request/send-consultation.php');
    return false;
});

function sendModalDialogForm(ajax_form, url) {
    $.ajax({
        url: url, //url страницы (action_ajax_form.php)
        type: "POST", //метод отправки
        dataType: "html", //формат данных
        data: $( ajax_form).serialize(),  // Сеарилизуем объект
        success: function (response) { //Данные отправлены успешно 
            let input = $('#modalDialog .modalDialogForm input')

            for (let i = 0; i < input.length; i++) {
                $(input[i]).css('border', '0')

            }
            $("#modalDialog").modal('hide');
            $("#window_after_sending").modal('show');
        },
        error: function (response, status, error) { // Данные не отправлены
            var errors = JSON.parse(response.responseText);
            $('#modalDialog .form-feedback').text("");
            let input = $('#modalDialog .modalDialogForm input')
            for (let i = 0; i < input.length; i++) {
                $(input[i]).css('border','0')
            }
            if (errors.errors) {
                errors.errors.forEach(function (data, index) {
                    var field = Object.getOwnPropertyNames(data);
                    var value = data[field];
                    var div = $("#modalDialog #" + field[0]).closest('div');

                    div.children('.form-feedback').text(value);
                    $("#modalDialog #" + field[0]).css("border", "2px solid #bc1818");
                    div.children('.form-feedback').css("color", "#bc1818");
                    if (field == "agreement") {
                        $("#modalDialog ." + field[0]).addClass('error');
                        div.children('.form-feedback').text('');
                    }
                });
            }
        }
    });
}


// отправка формы Рассчитать под ключ в РБ
$('#modalDialogСalculate .button-send').on('click', function (e) {
    $("#modalDialogСalculate .custom-checkbox").removeClass('error');
    modalDialogСalculate('#modalDialogСalculate .modalDialogForm', './request/send-consultation.php');
    return false;
});

function modalDialogСalculate(ajax_form, url) {
    $.ajax({
        url: url, //url страницы (action_ajax_form.php)
        type: "POST", //метод отправки
        dataType: "html", //формат данных
        data: $( ajax_form).serialize(),  // Сеарилизуем объект
        success: function (response) { //Данные отправлены успешно 
            let input = $('#modalDialogСalculate .modalDialogForm input')

            for (let i = 0; i < input.length; i++) {
                $(input[i]).css('border', '0')

            }
            $("#modalDialogСalculate").modal('hide');
            $("#window_after_sending").modal('show');
        },
        error: function (response, status, error) { // Данные не отправлены
            var errors = JSON.parse(response.responseText);
            $('#modalDialogСalculate .form-feedback').text("");
            let input = $('#modalDialogСalculate .modalDialogForm input')
                    
            for (let i = 0; i < input.length; i++) {
                $(input[i]).css('border','0')
            }
            console.log();
            if (errors.errors) {
                errors.errors.forEach(function (data, index) {
                    var field = Object.getOwnPropertyNames(data);
                    var value = data[field];
                    var div = $("#modalDialogСalculate #" + field[0]).closest('div');

                    div.children(' .form-feedback').text(value);
                    $("#modalDialogСalculate #" + field[0]).css("border", "2px solid #bc1818");
                    div.children('.form-feedback').css("color", "#bc1818");
                    if (field == "agreement") {
                        $("#modalDialogСalculate ." + field[0]).addClass('error');
                        div.children('.form-feedback').text('');
                            }
                });
            }
        }
    });
}
$('#window_after_sending .btn-close').on('click', function () {
    $("#window_after_sending").modal('hide');
    location.reload();
});
// вызов модального окна и меняется текст
const modalDialog = document.getElementById('modalDialog')
if (modalDialog) {
    modalDialog.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget
        const recipient = button.getAttribute('data-bs-whatever');
        const icon = button.getAttribute('data-bs-icon')

        const modalTitle = modalDialog.querySelector('#modalDialog .modal-title')
        const modalTitleMobile = modalDialog.querySelector('#modalDialog .modal-title.mobile')
        const modalIcon = modalDialog.querySelector('#modalDialog .modal-header img')
        const modalIconMobile = modalDialog.querySelector('#modalDialog .modal-body .mob-icon img')
        const modalHidden = modalDialog.querySelector('#modalDialog .modalDialogForm .hidden-status')
        modalIcon.src = `${icon}`
        modalIconMobile.src = `${icon}`
        modalTitle.innerHTML = `${recipient}`
        modalTitleMobile.innerHTML = `${recipient}`
        modalHidden.value = `${recipient}`
    })
}
const modalСalculate = document.getElementById('modalDialogСalculate')
if (modalСalculate) {
    modalСalculate.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget
        const recipient = button.getAttribute('data-bs-whatever');
        const icon = button.getAttribute('data-bs-icon')
        const price = button.getAttribute('data-bs-price')
        console.log(icon);

        const modalTitle = modalСalculate.querySelector('#modalDialogСalculate .modal-title')
        const modalTitleMobile2 = modalСalculate.querySelector('#modalDialogСalculate .modal-title.mobile')
        const modalIcon = modalСalculate.querySelector('#modalDialogСalculate .modal-header img')
        const modalIconMobile = modalСalculate.querySelector('#modalDialogСalculate .modal-body .mob-icon img')
        const modalPrice = modalСalculate.querySelector('#modalDialogСalculate .modal-body .sub-text span');
        const modalHidden = modalСalculate.querySelector('#modalDialogСalculate .modalDialogForm .hidden-status')
        const modalCarHidden = modalСalculate.querySelector('#modalDialogСalculate .modalDialogForm .hidden-status-car-model')
        modalTitle.innerHTML = ` ${recipient}`
        modalTitleMobile2.innerHTML = ` ${recipient}`
        modalIcon.src = `${icon}`
        modalIconMobile.src = `${icon}`
        modalPrice.innerHTML = `${price}`
        modalHidden.value = `${recipient}`
        modalCarHidden.value = button.value
    })
}

// вызов модального окна Отзывы и меняется текст
const modalReviews = document.getElementById('modalReviews')
if (modalReviews) {
    modalReviews.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget
        const img = button.getAttribute('data-bs-img')
        const textAll = modalReviews.querySelectorAll('#modalReviews p');
        for (let i = 0; i < textAll.length; i++) {
            $(textAll[i]).css('display', 'none')
        }
        const text =  modalReviews.querySelector('#modalReviews .modal-body #text-'+button.value)
        $(text).css('display','block')
                
        const modalImg = modalReviews.querySelector('#modalReviews .modal-body img')
        if(img){
            $(modalImg).css('display', 'block')
            modalImg.src = img;
        }else{
            $(modalImg).css('display','none')
        }
    })
}
//включаются всплыв подсказки
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


//При наведении в меню открывается список телефонов
const telMenu = document.querySelector('.nav-item.dropdown.in-mobile')
if(telMenu){
    telMenu.addEventListener('mouseover', (e)=>{
        const navLink = telMenu.querySelector('.nav-link.dropdown-toggle')
        navLink.classList.add('show');
        navLink.setAttribute('aria-expanded','true')

        const dropdownMenu = telMenu.querySelector('.dropdown-menu')
        dropdownMenu.classList.add('show');
        dropdownMenu.setAttribute('data-bs-popper', 'none')
    })
    telMenu.addEventListener('mouseout', (e)=>{
        const navLink = telMenu.querySelector('.nav-link.dropdown-toggle')
        navLink.classList.remove('show');
        navLink.setAttribute('aria-expanded','false')

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