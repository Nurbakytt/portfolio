const navbar = document.querySelector('.navbar')
const ham = document.querySelector('.ham')

function toggleHamburger () {
  navbar.classList.toggle('show__nav')
  ham.classList.toggle('show__close')
}

ham.addEventListener('click', toggleHamburger)

let myIndex = 0
carousel()

function carousel () {
  let i
  let x = document.getElementsByClassName('mySlides')
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none'
  }
  myIndex++
  if (myIndex > x.length) {
    myIndex = 1
  }
  x[myIndex - 1].style.display = 'block'
  setTimeout(carousel, 3000)
}

let checkbox = document.querySelector('.theme-switch__checkbox')

checkbox.addEventListener('change', function () {
  transition()
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
})

function transition () {
  document.documentElement.classList.add('transition')
  setTimeout(function () {
    document.documentElement.classList.remove('transition')
  }, 250)
}

function transition() {
    document.documentElement.classList.add('transition');
    setTimeout(function() {
      document.documentElement.classList.remove('transition');
    }, 250)
  }