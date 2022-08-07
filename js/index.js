// navbar back-ground --- on scrolling
let nav = document.querySelector(".navbar");

console.log(nav);
window.onscroll = function () {
    // navbar back-ground --- on scrolling
    if (window.scrollY >= 10) {
        nav.style.cssText = "top: 0px;"
    } else {
        nav.style.cssText = "top: 35px;"
    }
};