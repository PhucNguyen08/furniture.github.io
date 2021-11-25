const Modal = document.querySelector('.js-modal')
const ModalContainer = document.querySelector('.js-form-modal-container')
const ModalClose = document.querySelector('.js-form-modal-close')
const ModalBtn = document.querySelector('.js-btn')

function ShowBtn () {
    Modal.classList.add('open')
}

function HideBtn () {
    Modal.classList.remove('open')
}

ModalBtn.addEventListener('click',ShowBtn)
ModalClose.addEventListener('click',HideBtn)
Modal.addEventListener('click',HideBtn)

ModalContainer.addEventListener('click',function (event) {
    event.stopPropagation()
}
)

// var modal = document.getElementById('form-modal');
// var modalContainer = document.getElementById('form-container');
// var modalClose = document.getElementById('form-close');
// var modalBtn = document.getElementById('btn-js');

// modalBtn.onclick = function() {
//     modal.style.display = "flex";
// }

// modalClose.onclick = function() {
//     modal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }

