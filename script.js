"Use strict";

const btnScrollToTop = document.querySelector("#GoUpButton")
console.log(btnScrollToTop)

btnScrollToTop.addEventListener("click", e => {
    window.scrollTo({
        top:0,
        left:0, 
        behavior: "smooth"
    });
});

window.addEventListener("scroll", e => {
    btnScrollToTop.style.display = window.scrollY > 20 ? "block" : "none"
});