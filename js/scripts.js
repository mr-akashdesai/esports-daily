console.log("hello");

const menuToggle = document.getElementById("menu-toggle");
const menuNav = document.getElementById("menu-nav");

const toggleMenu = () => {
  console.log("called toggleMenu")
  menuNav.classList.toggle("menu-toggle");
}

menuToggle.addEventListener("click", toggleMenu);


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("homeSlides ");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
var slideIndex = 0;
carousel();

function carousel() {
    const dots = document.getElementsByClassName("dot");
    let i;
    const x = document.getElementsByClassName("homeSlides ");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
