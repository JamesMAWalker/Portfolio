// * Public Scripts //

window.onscroll = () => stickyNow();

let nav    = document.getElementById("navigation"),
    sticky = nav.offsetTop;

function stickyNow() {
    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky");
    }
}
