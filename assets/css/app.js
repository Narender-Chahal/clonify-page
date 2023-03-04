const open_nav = document.querySelector(".open_nav")
const aside_bar = document.querySelector(".aside_bar")
open_nav.addEventListener("click", function () {
    aside_bar.classList.toggle("left_0")
    document.body.classList.toggle("overflow_hidden")
})

// pre_loder
