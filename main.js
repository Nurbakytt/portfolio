// const menuToggle = document.querySelector('#menu_toggle')
// const menuContent = document.querySelector('.menu-content')


// menuToggle.addEventListener('click', function() {
//     menuContent.classList.toggle('active')
//     menuToggle.classList.toggle('active')
// })

const navbar = document.querySelector('.navbar')
const ham = document.querySelector('.ham')

function toggleHamburger() {
    navbar.classList.toggle('show__nav')
    ham.classList.toggle('show__close')
}

ham.addEventListener('click', toggleHamburger)






