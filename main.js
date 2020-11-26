// const menuToggle = document.querySelector('#menu_toggle')
// const menuContent = document.querySelector('.menu-content')


// menuToggle.addEventListener('click', function() {
//     menuContent.classList.toggle('active')
//     menuToggle.classList.toggle('active')
// })

const navbar = document.querySelector('.navbar')
const ham = document.querySelector('.ham')

function toggleHamburger() {
    navbar.classList.toggle('showNav')
    ham.classList.toggle('showClose')
}

ham.addEventListener('click', toggleHamburger)






