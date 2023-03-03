const toggle = document.querySelector(".toggle__menu");
const nav = document.querySelector(".header__nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
})