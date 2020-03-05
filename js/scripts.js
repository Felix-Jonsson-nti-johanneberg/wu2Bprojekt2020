$("#menu, .fade-layer ").click(function () {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("show");
    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("showblock");
})

let lastClicked = "firstnav";
$(".navigation").click(function () {
    let current = $(this).attr("id");
    $(`#${current}`).toggleClass("selected");
    $(`#${lastClicked}`).toggleClass("selected");
    
    lastClicked = current;
})

