"Use strict";

const btnScrollToTop = document.querySelector("#GoUpButton")
console.log(btnScrollToTop)

const btnDarkMode = document.querySelector("#darkmode-toggle");
console.log(btnDarkMode);

btnScrollToTop.addEventListener("click", e => {
    window.scrollTo({
        top:0,
        left:0, 
        behavior: "smooth"
    });
});

window.addEventListener("scroll", e => {
    let scale = 0;
    // console.log("ScrollY:", window.scrollY)
    if(window.scrollY > 50 && window.scrollY < 250)
    {
        scale = Math.round(window.scrollY * 0.2);
        btnScrollToTop.style.display = "block";
        btnScrollToTop.style.width = scale +"px";
        btnScrollToTop.style.height = scale + "px";
        // console.log("scale: ", scale);
    } else if(window.scrollY < 50)
    {
        btnScrollToTop.style.display = "none";
    }
    // btnScrollToTop.style.display = window.scrollY > 50 ? "block" : "none";
});