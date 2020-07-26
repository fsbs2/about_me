const modalOverlay = document.querySelector('.modal-overlay')
const link = document.querySelector('.linked')

link.addEventListener("click", function(){
    modalOverlay.classList.add('active')
    modalOverlay.querySelector("iframe").src="https://www.youtube.com/embed/G_HhAP9D6KI"
})

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src=""
})

