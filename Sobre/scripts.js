const modalOverlay = document.querySelector('.modal-overlay')
const link = document.querySelector('.linked')

link.addEventListener("click", function(){
    modalOverlay.classList.add('active')
})

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})