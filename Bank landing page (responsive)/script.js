
/****************Preloader*****************/

const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    preloader.classList.add("loaded")
});




/* ---------------Navbar Toggle--------------- */

const openNav = document.querySelector("#open_nav"),
      closeNav = document.querySelector("#close_nav"),
      nav = document.querySelector("nav");

const navBarFunction = () => {
        openNav.classList.toggle("dis_none");
        closeNav.classList.toggle("dis_none");
        nav.classList.toggle("nav_dis_none");
}

openNav.addEventListener("click", navBarFunction)

closeNav.addEventListener("click", navBarFunction)





