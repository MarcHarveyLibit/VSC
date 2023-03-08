const toggle = document.querySelector(".toggle__menu");
const nav = document.querySelector(".header__nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
})


// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }



const headerB = document.querySelector(".header");
window.addEventListener("scroll", () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 100){
        headerB.classList.add("shadowB");
    }else{
        headerB.classList.remove("shadowB");
    }
})
