const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const projectBtn = document.querySelector("#project-btn");
const contactBtn = document.querySelector("#contact-btn");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// projectBtn.addEventListener("click", (e) = {
//     var dataBsToggle = document.getElementsByTagName('collapse')
//     var bsCollapse = new bootstrap.Collapse(myCollapse, {
//         toggle: false
// })
    
// })

// contactBtn.addEventListener("click", () => {
//     // hamburger.classList.toggle("active");
//     // navMenu.classList.toggle("active");
// })