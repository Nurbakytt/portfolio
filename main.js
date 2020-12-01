const navbar = document.querySelector('.navbar')
const ham = document.querySelector('.ham')

function toggleHamburger() {
    navbar.classList.toggle('show__nav')
    ham.classList.toggle('show__close')
}

ham.addEventListener('click', toggleHamburger)


let myIndex = 0;
carousel();

function carousel() {
    let i;
    let x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
}



